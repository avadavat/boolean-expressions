import BooleanExpressions from "../";

describe("simple error handling tests", () => {
  let b: BooleanExpressions;

  beforeAll(() => {
    b = new BooleanExpressions();
  });

  it('evaluates "p AND q" not to throw an error', () => {
    expect(() => b.parse("p AND q")).not.toThrowError();
  });

  it('evaluates "p and q OR r" not to throw an error', () => {
    expect(() => b.parse("p and q OR r")).not.toThrowError();
  });

  it('evaluates "p q" to throw an error', () => {
    expect(() => b.parse("p q")).toThrowError();
  });

  it('evaluates "p AND q OR" to throw an error', () => {
    expect(() => b.parse("p AND q OR")).toThrowError();
  });
});

describe("parenthesis error handling tests", () => {
  let b: BooleanExpressions;

  beforeAll(() => {
    b = new BooleanExpressions();
  });

  it('evaluates "(p AND q) OR r" not to throw an error', () => {
    expect(() => b.parse("(p AND q) OR r")).not.toThrowError();
  });

  it('evaluates "(p AND (q OR r))" not to throw an error', () => {
    expect(() => b.parse("(p AND (q OR r))")).not.toThrowError();
  });

  it('evaluates "(p AND (q OR r)" to throw an error', () => {
    expect(() => b.parse("(p AND (q OR r)")).toThrowError();
  });
});

describe("special keyword error handling tests", () => {
  let b: BooleanExpressions;

  beforeAll(() => {
    b = new BooleanExpressions();
  });

  it('evaluates "p OR OR q" to throw an error', () => {
    expect(() => b.parse("p OR OR q")).toThrowError();
  });

  it('evaluates "not p" not to throw an error', () => {
    expect(() => b.parse("not p")).not.toThrowError();
  });

  it('evaluates "not" to throw an error', () => {
    expect(() => b.parse("not")).toThrowError();
  });

  it('evaluates "( not ) or ( not )" to throw an error', () => {
    expect(() => b.parse("( not ) or ( not )")).toThrowError();
  });
});

describe("expressions with invalid tokens", () => {
  let b: BooleanExpressions;

  beforeAll(() => {
    b = new BooleanExpressions();
  });

  it('evaluates "(p AND {q}) OR r" to throw an error', () => {
    expect(() => b.parse("(p AND {q}) OR r")).toThrowError();
  });
});
