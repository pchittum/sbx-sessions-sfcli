import { SfCommand, Flags } from '@salesforce/sf-plugins-core';
import { Messages } from '@salesforce/core';

Messages.importMessagesDirectoryFromMetaUrl(import.meta.url);
const messages = Messages.loadMessages('cloudbites', 'userpic');

export type UserpicResult = {
  path: string;
};

export default class Userpic extends SfCommand<UserpicResult> {
  public static readonly summary = messages.getMessage('summary');
  public static readonly description = messages.getMessage('description');
  public static readonly examples = messages.getMessages('examples');

  public static readonly flags = {
    'target-org': Flags.requiredOrg(),
    'target-user': Flags.string({
      summary: messages.getMessage('flags.target-user.summary'),
      required: true,
    }),
  };

  public async run(): Promise<UserpicResult> {
    const { flags } = await this.parse(Userpic);

    const myOrg = flags['target-org'];
    const connection = myOrg.getConnection([flags.api - version]);
    const targetUser = flags['target-user'];
    // const targetUser = flags['target-user'] ?? 'world';

    const result = await connection.query<{ Id: string; FullPhotoUrl: string }>(
      `SELECT Id, FullPhotoUrl FROM User WHERE Username = '${targetUser}'`
    );

    this.log(`hello  ${result.records[0].FullPhotoUrl} from src/commands/userpic.ts`);
    return { path: `hello ${targetUser} ${result.records[0].FullPhotoUrl}from src/commands/userpic.ts` };
  }
}
