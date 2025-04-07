import DoublyLinkedList from "../task/DoublyLinkedList";
import { describe, it, test, expect } from "vitest";

describe("Double linked list testing", () => {
  const dll = new DoublyLinkedList();
  dll.append(1);
  dll.append(2);
  dll.append(2);
  dll.append(2);
  dll.append(3);
  dll.append(4);

  dll.append(4);
  dll.append(4);

  // [1, 2, 3, 4, 5, 6, 7]
  const testCase = [
    {
      pass: dll.length(),
      expected: 6,
    },
    {
      pass: dll.findFirst(2),
      expected: 1,
    },
    {
      pass: dll.findLast(3),
      expected: 4,
    },
    {
      pass: dll.get(3),
      expected: 2,
    },
    {
      pass: dll.get(3),
      expected: 2,
    },
  ];

  testCase.forEach((test) => {
    it(`Pass ${test.pass}, expected ${test.expected}`, () => {
      expect(test.pass).toBe(test.expected);
    });
  });

  it("Clone methode test", () => {
    const clone = dll.clone();
    expect(dll.length()).toBe(clone.length());

    for (let i = 0; i < dll.length(); i++) {
      expect(dll.get(i)).toBe(clone.get(i));
    }
  });

  it("Reverse methode testing", () => {
    const dll2 = new DoublyLinkedList();
    dll2.append(1);
    dll2.append(2);
    dll2.append(2);
    dll2.append(2);
    dll2.append(3);
    dll2.append(4);

    dll2.reverse();
    const length = dll.length();

    const dllArr = dll.print();
    const dll2Arr = dll2.print();

    for (let i = 0; i < length; i++) {
      expect(dll2Arr).toEqual([...dllArr].reverse());
    }
  });

  it("Clear methode test", () => {
    const dll2 = new DoublyLinkedList();
    dll2.append(1);
    dll2.append(2);
    dll2.append(2);
    dll2.append(2);
    dll2.append(3);
    dll2.append(4);

    dll2.clear();

    expect(dll2.length()).toBe(0);
  });
});
