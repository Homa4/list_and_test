import ArrayList from "../task/ArrayList";
import { describe, it, expect, beforeEach } from "vitest";

describe("ArrayList", () => {
  let list;

  beforeEach(() => {
    list = new ArrayList();
    list.append(1);
    list.append(2);
    list.append(2);
    list.append(3);
    list.append(4);
  });

  it("should return correct length", () => {
    expect(list.length()).toBe(5);
  });

  it("should append element", () => {
    list.append(5);
    expect(list.get(list.length() - 1)).toBe(5);
    expect(list.length()).toBe(6);
  });

  it("should insert element at given index", () => {
    list.insert(99, 2);
    expect(list.get(2)).toBe(99);
    expect(list.length()).toBe(6);
  });

  it("should throw error if insert index is invalid", () => {
    expect(() => list.insert(10, -1)).toThrow();
    expect(() => list.insert(10, 100)).toThrow();
  });

  it("should delete element by index", () => {
    const deleted = list.delete(1);
    expect(deleted).toBe(2);
    expect(list.length()).toBe(4);
  });

  it("should throw error if delete index is invalid", () => {
    expect(() => list.delete(-1)).toThrow();
    expect(() => list.delete(100)).toThrow();
  });

  it("should delete all matching elements", () => {
    list.deleteAll(2);
    expect(list.length()).toBe(3);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(3);
    expect(list.get(2)).toBe(4);
  });

  it("should return element by index", () => {
    expect(list.get(2)).toBe(2);
  });

  it("should throw error if get index is invalid", () => {
    expect(() => list.get(-1)).toThrow();
    expect(() => list.get(100)).toThrow();
  });

  it("should clone correctly", () => {
    const clone = list.clone();
    expect(clone.length()).toBe(list.length());

    for (let i = 0; i < list.length(); i++) {
      expect(clone.get(i)).toBe(list.get(i));
    }

    // modify original
    list.append(99);
    expect(clone.length()).toBe(list.length() - 1);
  });

  it("should reverse list", () => {
    list.reverse();
    expect(list.get(0)).toBe(4);
    expect(list.get(list.length() - 1)).toBe(1);
  });

  it("should find first occurrence", () => {
    expect(list.findFirst(2)).toBe(1);
  });

  it("should find last occurrence", () => {
    expect(list.findLast(2)).toBe(2);
  });

  it("should clear the list", () => {
    list.clear();
    expect(list.length()).toBe(0);
  });

  it("should extend list with another", () => {
    const other = new ArrayList();
    other.append(9);
    other.append(10);

    list.extend(other);

    expect(list.length()).toBe(7);
    expect(list.get(5)).toBe(9);
    expect(list.get(6)).toBe(10);
  });
});
