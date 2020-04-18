interface ParseResult {
  matchResult: any; // todo
  variableNames: string[];
}

export class BooleanExpressions {
  constructor() {}

  parse(exp: string): ParseResult {
    return { matchResult: undefined, variableNames: [] };
  }

  evaluate(matchResult: any, variables: string[]): boolean {
    return false;
  }
}
