declare namespace GenerateComponent {
  // name of component e.g. "related topic"
  export type ComponentName = string;
  export type ComponentTypes = "Component" | "Block";

  export interface CliOptions {
    name?: ComponentName; // name of component
    config?: String;
    templatesDir?: String;
  }

  export interface Options extends CliOptions {
    name: ComponentName; // e.g. "related content"
    type: ComponentTypes; // is this an component or block
  }

  export interface TemplateOptions extends Options {
    pascalCase: string; // e.g. "RelatedTopics"
    camelCase: string; // e.g. "relatedTopics"
    kebabCase: string; // e.g. "related-topics"
  }

  export type Prompt = import("@types/inquirer").Question;

  export interface ConfigItem {
    // identifier which might be used by the user to find the config which needs modification
    id?: string;
    prompt?: Prompt;
    files?: Array<{
      id?: string;
      // whether or not the file should be created
      when?: boolean | ((opt: Options) => boolean) = true;
      // function which returns the boilerplate code to be used as the starter
      template: (opt: TemplateOptions) => Promise<string>;
      // path to stored the generated file. is relative to the cmd cwd
      path: (opt: TemplateOptions) => string;
    }>;
  }

  type Config = ConfigItem[];
}
