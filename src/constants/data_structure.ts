export const DATA_STRUCTURE = [
  {
    question: 'What is algorithmic complexity?',
    response: [
      `This is a way to estimate how much resources (time or memory) an algorithm consumes depending on the size of the input data. It allows you to predict how the algorithm will behave as the amount of data increases.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to estimate algorithmic complexity?',
    response: [
      `Step 1: Identify the main operations.
        Find which parts of the code are executed most often and grow with the increase in data.
        For example: loops, recursion, access to collections.
        Step 2: Count the game operations.
        One loop over n elements → O(n).
        Nested loop → O(n^2).
        Recursion divides the array in half → O(log n).
        Step 3: Drop less significant constants.
        If the algorithm performs 3n + 5 operations, we write O(n).
        Constants and additions are not considered in big O analysis.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Array',
    response: [
      `What it is: a sequence of elements of the same type, located in memory one after the other.
        Features:
        Accessing an element by index: O(1).
        Adding/removing an element to the end: O(1) (amortized), to the middle: O(n).
        Fixed size in static arrays, dynamic in many languages (JavaScript, Python).
        Example of use: storing a list of users, numbers, coordinates.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Linked List',
    response: [
      `What it is: A collection of nodes, each containing data and a reference to the next (singly linked) or previous (doubly linked) node.
        Features:
        Accessing an element by index: O(n).
        Adding/removing a node: O(1) (if the node is known).
        Flexible size, easy nesting.
        Example use: implementing stacks and queues, message queues.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Stack',
    response: [
      `What is it: a structure based on the LIFO (Last In, First Out) principle - the last element added is the first to be removed.
        Operations:
        push(item) - add an element,
        pop() - remove the last element,
        peek() - look at the last element without removing,
        Time complexity: all operations O(1),
        Example of use:
        Calling functions (call stack),
        Undo/Redo in editors,
        Solving problems such as "checking brackets".`,
    ],
    fullResponse: '',
  },
  {
    question: 'Queue',
    response: [
      `What it is: FIFO (First In, First Out) structure - the first element added is the first to be removed.
        Operations:
        enqueue(item) - add an element to the end,
        dequeue() - remove an element from the beginning,
        Time complexity: O(1) for a typical implementation using two pointers or a deque.
        Variants:
        Priority Queue - elements are retrieved by priority.
        Circular Queue - optimization for a limited buffer.
        Example of use:
        Print queues, server request processing.
        BFS (Breadth-First Search) algorithms.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Selection Sort',
    response: [
      `How it works:
        Finds the minimum (or maximum) element in an array.
        Swaps it with the first unsorted element.
        Repeats for the rest of the array.
        Complexity:
        Time: O(n^2),
        Memory: O(1),
        Features: Simple, but slow on large arrays.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Bubble Sort',
    response: [
      `How it works:
        Iterates through the array, comparing adjacent elements.
        Swaps if they are in the wrong order.
        Repeats the passes until the array is sorted.
        Complexity:
        Time: O(n^2),
        Memory: O(1).
        Features: Easy to understand, but inefficient on large arrays.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Insertion Sort',
    response: [
      `How it works:
        Threads the array one element at a time.
        Inserts the current element into the sorted part of the array.
        Complexity:
        Time: O(n^2) on average, O(n) if the array is already sorted.
        Memory: O(1)
        Features: Works well on nearly sorted arrays.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Quick Sort',
    response: [
      `How it works:
        Selects a pivot element.
        Splits the array into two parts: smaller and larger than pivot.
        Recursively sorts both parts.
        Complexity:
        Time: O(n log n) on average, O(n^2) in the worst case.
        Memory: O(log n) recursion.
        Features: Very fast on large arrays, most commonly used.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Merge Sort',
    response: [
      `How it works:
        Divides an array in half recursively.
        Sorts each half.
        Merges the sorted parts into a single array.
        Complexity:
        Time: O(n log n).
        Memory: O(n).
        Features: Stable algorithm, efficient for large arrays and external sorting.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Heap Sort',
    response: [
      `How it works:
        Converts an array to a binary heap.
        Removes the maximum element from the heap several times and puts it at the end of the array.
        Complexity:
        Time: O(n log n).
        Memory: O(1).
        Features: Efficient and memory-stable, but not always stable (may change the order of equal elements).`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is recursion?',
    response: [
      `is when a function calls itself to solve a subproblem until a base case is reached, which stops the recursion.
        A base case is the condition under which a function no longer calls itself.
          A recursive case is a function calling itself within itself for a simplified or smaller version of the problem.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Give examples of recursion use.',
    response: [
      `Factorial of a number, Traversal of a tree or graph (DFS), Calculating Fibonacci numbers, Recursive problems on the frontend.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Binary Search',
    response: [
      `How it works: Works on sorted arrays. Splits the array in half, compares the middle element with the target element, and chooses half for the next step.
        Complexity: O(log n)
        Advantages: Very fast for large data.
        Disadvantages: Requires a sorted array.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Linear Search',
    response: [
      `How it works: iterates through all elements one by one until it finds the one it needs.
        Complexity: O(n).
        Advantages: simple, no sorting required.
        Disadvantages: slow on large arrays.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Depth-first search (DFS)',
    response: [
      `How it works: follows one path of a graph/tree to the end, then turns around and explores another path.
        Complexity: O(V + E) (V is nodes, E is edges).
        Advantages: convenient for recursive traversal of trees and graphs.
        Disadvantages: does not guarantee the shortest path.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Breadth-first search (BFS)',
    response: [
      `How it works: Traverses the graph level by level, from the nodes closest to the starting node to the farthest nodes.
        Complexity: O(V + E).
        Advantages: Guarantees the shortest path in an unweighted graph.
        Disadvantages: Requires more memory than DFS.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Search by hash table',
    response: [
      `How it works: Uses a hash function to quickly access elements.
        Complexity: O(1) on average, O(n) in the worst case.
        Advantages: Very fast access and search.
        Disadvantages: Requires additional memory for the hash table.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How a hash table works?',
    response: [
      `There is a key, for example "apple".
        The hash function converts "apple" to a number, for example 42.
        The value ("apple") is stored in the array at position 42.
        When searching for "apple", the hash function returns 42 again, and we instantly get "apple".`,
    ],
    fullResponse: '',
  },
  {
    question: 'Advantage hash table',
    response: [
      `Fast access: Average O(1) for search, insert, delete.
        Key flexibility: Keys can be strings, numbers, objects (implementation dependent).
        Ease of use: Convenient for storing associative data (key → value).`,
    ],
    fullResponse: '',
  },
  {
    question: 'Disadvantage hash table',
    response: [
      `Key collisions: Multiple keys can hash to the same index → must be resolved (chains or public addresses)
        Large memory Additional array required for “baskets” and hash distribution.
        Unordered data: Hash table does not preserve insertion order (unless using Map).
        Bad hash function: If the hash function is bad, the complexity can increase to O(n).`,
    ],
    fullResponse: '',
  },
  {
    question: 'What algorithms can be used to find the shortest path in a graph?',
    response: [
      `Dijkstra, Bellman-Ford, Floyd-Warshall, A-star, BFS (Breadth-First Search).`,
    ],
    fullResponse: '',
  },
  {
    question: 'What non-trivial data structures have you worked with or know of?',
    response: [
      `Trees and their variations, Graph structures, Structures for specific tasks, Probabilistic and exotic.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Tell us about CRDT.',
    response: [
      `These are data structures that allow copies of data on different nodes in a distributed system to be modified simultaneously and independently without centralized synchronization, and then automatically merged into a single consistent version.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What optimization algorithms were used to improve the performance of large applications?',
    response: [
      `Data structure and query optimization algorithms, Algorithms for working with streams and large amounts of data, Multithreading optimization algorithms, Caching and memory access optimization, Frontend/UX optimization algorithms, Heuristic and classical optimization algorithms.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What sorting algorithms do you think are most effective for processing large data sets?',
    response: [
      `If everything fits in RAM → Timsort or Introsort.
        If on disk (external sort) → MergeSort (external merge).
        If numeric data with a small range → Counting / Radix Sort.
        If cluster / big data → MapReduce Sort / Sample Sort.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to use dynamic programming in real projects?',
    response: [
      `Route and Logistics Optimization, Financial Calculations, Natural Language Processing/Search, Computer Graphics and CV, Scheduling and Planning.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Example task of using dynamic programming',
    response: [
      `optimize the cost of using cloud servers (AWS, GCP).
        AWS has different tariffs: On-Demand, Reserved Instances, Spot. You need to choose the optimal set a few months in advance.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Tell us about the practical use of data structures such as AVL trees or red-black trees.',
    response: [
      `AVL tree: more tightly balanced → better for searching (O(log n) guaranteed), but slower for insertion/deletion.
        Red-black tree: less balanced, but faster for insertion/deletion → more popular in system software.`,
    ],
    fullResponse: '',
  },
];