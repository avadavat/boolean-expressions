import { grammar, Grammar, MatchResult } from "ohm-js";
import { grammarRules } from "./grammar";
import { extractVariables } from "./util";

interface ParseResult {
  matchResult: MatchResult;
  variableNames: string[];
}

export class BooleanExpressions {
  truthGrammar: Grammar;

  constructor() {
    this.truthGrammar = grammar(grammarRules);
  }

  /**
   * Parses the given boolean expression into a MatchResult and
   * a list of unique variable names in the expression.
   * @param exp The boolean expression string
   */
  parse(exp: string): ParseResult {
    const matchResult = this.truthGrammar.match(exp);
    if (matchResult.failed()) {
      throw new Error(`Parse failed ${matchResult.shortMessage}`);
    }

    const variableNames = extractVariables(exp);
    const parseResult: ParseResult = { matchResult, variableNames };
    return parseResult;
  }

  evaluate(matchResult: MatchResult, variables: string[]): boolean {
    return false;
  }
}
