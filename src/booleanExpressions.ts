import { grammar, Grammar, MatchResult } from "ohm-js";
import { grammarRules } from "./grammar";

interface ParseResult {
  matchResult: MatchResult;
  variableNames: string[];
}

export class BooleanExpressions {
  truthGrammar: Grammar;

  constructor() {
    this.truthGrammar = grammar(grammarRules);
  }

  parse(exp: string): ParseResult {
    // todo
    return { matchResult: undefined, variableNames: [] };
  }

  evaluate(matchResult: MatchResult, variables: string[]): boolean {
    return false;
  }
}
