const questions = [
  {
    id: 0,
    name: "Contains DuplicatTest1",
    url: "https://leetcode.com/problems/contains-duplicate/",
    pattern: ["Strings"],
    difficulty: "Easy",
    premium: false,
    companies: []
  },
  {
    id: 1,
    name: "Valid Anagram",
    url: "https://leetcode.com/problems/valid-anagram/",
    pattern: ["Strings"],
    difficulty: "Easy",
    premium: false,
    companies: []
  },
  {
    id: 2,
    name: "Find All Numbers Disappeared in an Array",
    url:
      "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
    pattern: ["Arrays"],
    difficulty: "Easy",
    premium: false,
    companies: ["Facebook", "Amazon"]
  },
  {
    id: 3,
    name: "Single Number",
    url: "https://leetcode.com/problems/single-number/",
    pattern: ["Arrays", "Bit Manipulation"],
    difficulty: "Easy",
    premium: false,
    companies: ["Amazon", "Microsoft", "Adobe"]
  },
  {
    id: 4,
    name: "Product of Array Except Self",
    url: "https://leetcode.com/problems/product-of-array-except-self/",
    pattern: ["Arrays"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Facebook",
      "Amazon",
      "Asana",
      "Microsoft",
      "Apple",
      "Lyft",
      "Adobe",
      "Google",
      "Uber",
      "Goldman Sachs",
      "Oracle"
    ]
  },
  {
    id: 5,
    name: "Find the Duplicate Number",
    url: "https://leetcode.com/problems/find-the-duplicate-number/",
    pattern: ["Arrays", "Binary Search", "Two Pointers"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Google",
      "Microsoft",
      "Amazon",
      "Adobe",
      "Bloomberg",
      "Facebook",
      "Apple"
    ]
  },
  {
    id: 6,
    name: "Find All Duplicates in an Array",
    url: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
    pattern: ["Arrays"],
    difficulty: "Medium",
    premium: false,
    companies: ["Amazon", "Google"]
  },
  {
    id: 7,
    name: "Set Matrix Zeroes",
    url: "https://leetcode.com/problems/set-matrix-zeroes/",
    pattern: ["Arrays"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Facebook",
      "Microsoft",
      "Amazon",
      "Apple",
      "Adobe",
      "Bloomberg",
      "Oracle"
    ]
  },
  {
    id: 8,
    name: "Spiral Matrix",
    url: "https://leetcode.com/problems/spiral-matrix/",
    pattern: ["Arrays"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Microsoft",
      "Amazon",
      "Facebook",
      "Apple",
      "Google",
      "Oracle",
      "Bloomberg",
      "Intuit",
      "Adobe"
    ]
  },
  {
    id: 9,
    name: "Rotate Image",
    url: "https://leetcode.com/problems/rotate-image/",
    pattern: ["Arrays"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Facebook",
      "Microsoft",
      "Apple",
      "Bloomberg",
      "Uber",
      "Google"
    ]
  },
  {
    id: 10,
    name: "Word Search",
    url: "https://leetcode.com/problems/word-search/",
    pattern: ["Backtracking"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Microsoft",
      "Twitter",
      "Facebook",
      "Snapchat",
      "Goldman Sachs",
      "Google",
      "Bloomberg",
      "Apple",
      "Adobe",
      "Oracle",
      "Qualtrics"
    ]
  },

  {
    id: 11,
    name: "First Missing Positive",
    url: "https://leetcode.com/problems/first-missing-positive/",
    pattern: ["Arrays"],
    difficulty: "Hard",
    premium: false,
    companies: ["Amazon", "Microsoft", "Facebook", "Google", "Adobe", "Apple"]
  },
  {
    id: 12,
    name: "Longest Consecutive Sequence",
    url: "https://leetcode.com/problems/longest-consecutive-sequence/",
    pattern: ["Arrays"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Microsoft",
      "Facebook",
      "Amazon",
      "Google",
      "LinkedIn",
      "Apple",
      "Qualtrics",
      "Goldman Sachs",
      "Salesforce"
    ]
  },

  {
    id: 13,
    name: "Letter Case Permutation",
    url: "https://leetcode.com/problems/letter-case-permutation/",
    pattern: ["Backtracking"],
    difficulty: "Medium",
    premium: false,
    companies: ["Microsoft"]
  },
  {
    id: 14,
    name: "Subsets",
    url: "https://leetcode.com/problems/subsets/",
    pattern: ["Backtracking"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Facebook",
      "Amazon",
      "Google",
      "Bloomberg",
      "Goldman Sachs",
      "Adobe",
      "Twitter"
    ]
  },
  {
    id: 15,
    name: "Subsets II",
    url: "https://leetcode.com/problems/subsets-ii/",
    pattern: ["Backtracking"],
    difficulty: "Medium",
    premium: false,
    companies: ["Facebook", "Amazon", "Bloomberg"]
  },
  {
    id: 16,
    name: "Permutations",
    url: "https://leetcode.com/problems/permutations/",
    pattern: ["Backtracking"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Facebook",
      "LinkedIn",
      "Bloomberg",
      "Google",
      "Microsoft",
      "Adobe",
      "Apple",
      "Oracle"
    ]
  },
  {
    id: 17,
    name: "Permutations II",
    url: "https://leetcode.com/problems/permutations-ii/",
    pattern: ["Backtracking"],
    difficulty: "Medium",
    premium: false,
    companies: ["LinkedIn", "Facebook", "Amazon", "Adobe", "Apple"]
  },
  {
    id: 18,
    name: "Combinations",
    url: "https://leetcode.com/problems/combinations/",
    pattern: ["Backtracking"],
    difficulty: "Medium",
    premium: false,
    companies: ["Google", "Facebook", "Amazon"]
  },
  {
    id: 19,
    name: "Combination Sum",
    url: "https://leetcode.com/problems/combination-sum/",
    pattern: ["Backtracking"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Facebook",
      "Amazon",
      "Airbnb",
      "Apple",
      "Adobe",
      "Microsoft",
      "LinkedIn",
      "Goldman Sachs",
      "Snapchat",
      "Salesforce"
    ]
  },
  {
    id: 20,
    name: "Combination Sum II",
    url: "https://leetcode.com/problems/combination-sum-ii/",
    pattern: ["Backtracking"],
    difficulty: "Medium",
    premium: false,
    companies: ["Facebook", "Amazon"]
  },
  {
    id: 21,
    name: "Combination Sum III",
    url: "https://leetcode.com/problems/combination-sum-iii/",
    pattern: ["Backtracking"],
    difficulty: "Medium",
    premium: false,
    companies: ["Google"]
  },
  {
    id: 22,
    name: "Generate Parentheses",
    url: "https://leetcode.com/problems/generate-parentheses/",
    pattern: ["Backtracking"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Facebook",
      "Microsoft",
      "Apple",
      "Bloomberg",
      "Adobe",
      "Uber",
      "Google",
      "Goldman Sachs"
    ]
  },
  {
    id: 23,
    name: "Target Sum",
    url: "https://leetcode.com/problems/target-sum/",
    pattern: ["DFS", "Dynamic Programming"],
    difficulty: "Medium",
    premium: false,
    companies: ["Facebook", "Amazon", "Microsoft", "Adobe"]
  },
  {
    id: 24,
    name: "Palindrome Partitioning",
    url: "https://leetcode.com/problems/palindrome-partitioning/",
    pattern: ["Backtracking"],
    difficulty: "Medium",
    premium: false,
    companies: ["Apple"]
  },
  {
    id: 25,
    name: "Letter Combinations of a Phone Number",
    url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
    pattern: ["Backtracking"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Microsoft",
      "Facebook",
      "Google",
      "Uber",
      "Apple",
      "Adobe",
      "Twitter",
      "Bloomberg",
      "Oracle",
      "Goldman Sachs",
      "Snapchat",
      "Intuit"
    ]
  },
  {
    id: 26,
    name: "Generalized Abbreviation",
    url: "https://leetcode.com/problems/generalized-abbreviation/",
    pattern: ["Backtracking"],
    difficulty: "Medium",
    premium: true,
    companies: ["", "Google"]
  },
  {
    id: 27,
    name: "Sudoku Solver",
    url: "https://leetcode.com/problems/sudoku-solver/",
    pattern: ["Backtracking"],
    difficulty: "Hard",
    premium: false,
    companies: ["", "Google", "Intuit", "Amazon", "Apple", "Uber", "Bloomberg"]
  },
  {
    id: 28,
    name: "N-Queens",
    url: "https://leetcode.com/problems/n-queens/",
    pattern: ["Backtracking"],
    difficulty: "Hard",
    premium: false,
    companies: [
      "Amazon",
      "Microsoft",
      "Apple",
      "Facebook",
      "Uber",
      "Goldman Sachs",
      "Adobe"
    ]
  },
  {
    id: 29,
    name: "Climbing Stairs",
    url: "https://leetcode.com/problems/climbing-stairs/",
    pattern: ["Dynamic Programming"],
    difficulty: "Easy",
    premium: false,
    companies: ["Amazon", "Microsoft", "Google", "Bloomberg", "Apple", "Adobe"]
  },
  {
    id: 30,
    name: "House Robber",
    url: "https://leetcode.com/problems/house-robber/",
    pattern: ["Dynamic Programming"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Microsoft",
      "Google",
      "Apple",
      "Adobe",
      "Qualtrics",
      "Bloomberg",
      "Facebook",
      "Goldman Sachs"
    ]
  },
  {
    id: 31,
    name: "Best Time to Buy and Sell Stock",
    url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    pattern: ["Dynamic Programming"],
    difficulty: "Easy",
    premium: false,
    companies: [
      "Amazon",
      "Facebook",
      "Apple",
      "Adobe",
      "Microsoft",
      "Bloomberg",
      "Snapchat",
      "Goldman Sachs",
      "Uber",
      "Oracle",
      "Google",
      "BlackRock",
      "Citadel",
      "JPMorgan",
      "Salesforce"
    ]
  },
  {
    id: 32,
    name: "Maximum Subarray",
    url: "https://leetcode.com/problems/maximum-subarray/",
    pattern: ["Dynamic Programming"],
    difficulty: "Easy",
    premium: false,
    companies: [
      "LinkedIn",
      "Amazon",
      "Adobe",
      "Apple",
      "Microsoft",
      "Google",
      "Bloomberg",
      "Facebook",
      "Uber",
      "Oracle",
      "Goldman Sachs",
      "JPMorgan"
    ]
  },
  {
    id: 33,
    name: "Range Sum Query - Immutable",
    url: "https://leetcode.com/problems/range-sum-query-immutable/",
    pattern: ["Dynamic Programming"],
    difficulty: "Easy",
    premium: false,
    companies: ["Facebook", "Adobe"]
  },
  {
    id: 34,
    name: "House Robber II",
    url: "https://leetcode.com/problems/house-robber-ii/",
    pattern: ["Dynamic Programming"],
    difficulty: "Medium",
    premium: false,
    companies: ["Amazon", "Google"]
  },
  {
    id: 35,
    name: "Coin Change",
    url: "https://leetcode.com/problems/coin-change/",
    pattern: ["Dynamic Programming"],
    difficulty: "Medium",
    premium: false,
    companies: ["Amazon", "Microsoft", "Google", "Apple"]
  },
  {
    id: 36,
    name: "Maximum Product Subarray",
    url: "https://leetcode.com/problems/maximum-product-subarray/",
    pattern: ["Dynamic Programming"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "LinkedIn",
      "Amazon",
      "Microsoft",
      "Google",
      "Apple",
      "Facebook",
      "Bloomberg"
    ]
  },
  {
    id: 37,
    name: "Longest Increasing Subsequence",
    url: "https://leetcode.com/problems/longest-increasing-subsequence/",
    pattern: ["Dynamic Programming"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Google",
      "Amazon",
      "Facebook",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ]
  },
  {
    id: 38,
    name: "Longest Palindromic Substring",
    url: "https://leetcode.com/problems/longest-palindromic-substring/",
    pattern: ["Dynamic Programming"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Microsoft",
      "Adobe",
      "Apple",
      "Facebook",
      "Google",
      "Oracle",
      "Salesforce",
      "Bloomberg",
      "LinkedIn",
      "Tesla"
    ]
  },
  {
    id: 39,
    name: "Word Break",
    url: "https://leetcode.com/problems/word-break/",
    pattern: ["Dynamic Programming"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Facebook",
      "Amazon",
      "Microsoft",
      "Uber",
      "Apple",
      "Bloomberg",
      "Qualtrics",
      "Adobe",
      "Google",
      "Snapchat",
      "Salesforce"
    ]
  },
  {
    id: 40,
    name: "Combination Sum IV",
    url: "https://leetcode.com/problems/combination-sum-iv/",
    pattern: ["Dynamic Programming"],
    difficulty: "Medium",
    premium: false,
    companies: ["Google", "Amazon", "Facebook"]
  },
  {
    id: 41,
    name: "Decode Ways",
    url: "https://leetcode.com/problems/decode-ways/",
    pattern: ["Dynamic Programming"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Google",
      "Snapchat",
      "Lyft",
      "Goldman Sachs",
      "Microsoft",
      "Bloomberg",
      "JPMorgan"
    ]
  },
  {
    id: 42,
    name: "Unique Paths",
    url: "https://leetcode.com/problems/unique-paths/",
    pattern: ["Dynamic Programming"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Google",
      "Facebook",
      "Amazon",
      "Apple",
      "Microsoft",
      "Bloomberg"
    ]
  },
  {
    id: 43,
    name: "Jump Game",
    url: "https://leetcode.com/problems/jump-game/",
    pattern: ["Dynamic Programming", "Greedy"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Facebook",
      "Uber",
      "Oracle",
      "Adobe",
      "Microsoft",
      "Bloomberg"
    ]
  },
  {
    id: 44,
    name: "Palindromic Substrings",
    url: "https://leetcode.com/problems/palindromic-substrings/",
    pattern: ["Dynamic Programming"],
    difficulty: "Medium",
    premium: false,
    companies: ["Facebook", "Microsoft", "Google", "Goldman Sachs"]
  },
  {
    id: 45,
    name: "Number of Longest Increasing Subsequence",
    url:
      "https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
    pattern: ["Dynamic Programming"],
    difficulty: "Medium",
    premium: false,
    companies: ["Amazon", "Google"]
  },
  {
    id: 46,
    name: "Partition Equal Subset Sum",
    url: "https://leetcode.com/problems/partition-equal-subset-sum/",
    pattern: ["Dynamic Programming"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Facebook",
      "Google",
      "Amazon",
      "Microsoft",
      "Uber",
      "Apple",
      "Bloomberg"
    ]
  },
  {
    id: 47,
    name: "Partition to K Equal Sum Subsets",
    url: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
    pattern: ["Dynamic Programming"],
    difficulty: "Medium",
    premium: false,
    companies: ["LinkedIn", "Facebook"]
  },
  {
    id: 48,
    name: "Best Time to Buy and Sell Stock with Cooldown",
    url:
      "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
    pattern: ["Dynamic Programming"],
    difficulty: "Medium",
    premium: false,
    companies: ["Adobe", "Bloomberg"]
  },
  {
    id: 49,
    name: "Counting Bits",
    url: "https://leetcode.com/problems/counting-bits/",
    pattern: ["Dynamic Programming", "Bit Manipulation"],
    difficulty: "Easy",
    premium: false,
    companies: ["Google"]
  },
  {
    id: 50,
    name: "Linked List Cycle",
    url: "https://leetcode.com/problems/linked-list-cycle/",
    pattern: ["Fast & Slow Pointers"],
    difficulty: "Easy",
    premium: false,
    companies: [
      "Microsoft",
      "Amazon",
      "Bloomberg",
      "Oracle",
      "Facebook",
      "Google"
    ]
  },
  {
    id: 51,
    name: "Middle of the Linked List",
    url: "https://leetcode.com/problems/middle-of-the-linked-list/",
    pattern: ["Fast & Slow Pointers"],
    difficulty: "Easy",
    premium: false,
    companies: ["Amazon", "Apple", "Microsoft", "Adobe", "Goldman Sachs"]
  },
  {
    id: 52,
    name: "Palindrome Linked List",
    url: "https://leetcode.com/problems/palindrome-linked-list/",
    pattern: ["Fast & Slow Pointers"],
    difficulty: "Easy",
    premium: false,
    companies: ["Facebook", "Amazon", "Microsoft", "Intuit", "Bloomberg"]
  },
  {
    id: 53,
    name: "Remove Linked List Elements",
    url: "https://leetcode.com/problems/remove-linked-list-elements/",
    pattern: ["Fast & Slow Pointers"],
    difficulty: "Easy",
    premium: false,
    companies: ["Facebook", "Microsoft"]
  },
  {
    id: 54,
    name: "Remove Duplicates from Sorted List",
    url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
    pattern: ["Fast & Slow Pointers"],
    difficulty: "Easy",
    premium: false,
    companies: ["Amazon", "Adobe", "Facebook", "Microsoft"]
  },
  {
    id: 55,
    name: "Linked List Cycle II",
    url: "https://leetcode.com/problems/linked-list-cycle-ii/",
    pattern: ["Fast & Slow Pointers"],
    difficulty: "Medium",
    premium: false,
    companies: ["Microsoft", "Amazon", "Goldman Sachs", "Oracle"]
  },
  {
    id: 56,
    name: "Add Two Numbers",
    url: "https://leetcode.com/problems/add-two-numbers/",
    pattern: ["Fast & Slow Pointers"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Bloomberg",
      "Adobe",
      "Microsoft",
      "Facebook",
      "Google",
      "Apple",
      "Uber",
      "Capital One",
      "Oracle"
    ]
  },
  {
    id: 57,
    name: "Remove Nth Node From End Of List",
    url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    pattern: ["Fast & Slow Pointers"],
    difficulty: "Medium",
    premium: false,
    companies: ["Facebook", "Microsoft", "Amazon", "Google", "Apple"]
  },
  {
    id: 58,
    name: "Sort List",
    url: "https://leetcode.com/problems/sort-list/",
    pattern: ["Fast & Slow Pointers"],
    difficulty: "Medium",
    premium: false,
    companies: ["Facebook", "Amazon", "Apple", "Uber"]
  },
  {
    id: 59,
    name: "Reorder List",
    url: "https://leetcode.com/problems/reorder-list/",
    pattern: ["Fast & Slow Pointers"],
    difficulty: "Medium",
    premium: false,
    companies: ["Amazon", "Adobe", "Facebook", "Google", "Snapchat", "Uber"]
  },
  {
    id: 60,
    name: "Clone Graph",
    url: "https://leetcode.com/problems/clone-graph/",
    pattern: ["BFS", "DFS", "Graph"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Facebook",
      "Microsoft",
      "Amazon",
      "Salesforce",
      "Google",
      "Twitter",
      "Bloomberg",
      "Oracle",
      "Apple"
    ]
  },
  {
    id: 61,
    name: "Pacific Atlantic Water Flow",
    url: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    pattern: ["BFS", "DFS"],
    difficulty: "Medium",
    premium: false,
    companies: ["Google", "Amazon", "Microsoft", "Facebook", "Apple"]
  },
  {
    id: 62,
    name: "Number of Islands",
    url: "https://leetcode.com/problems/number-of-islands/",
    pattern: ["BFS", "DFS", "Union Find"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Microsoft",
      "Bloomberg",
      "Google",
      "LinkedIn",
      "Facebook",
      "Apple",
      "Oracle",
      "Goldman Sachs",
      "Salesforce",
      "Lyft",
      "Uber",
      "Adobe",
      "Qualtrics"
    ]
  },
  {
    id: 63,
    name: "Graph Valid Tree",
    url: "https://leetcode.com/problems/graph-valid-tree/",
    pattern: ["BFS", "DFS", "Graph", "Union Find"],
    difficulty: "Medium",
    premium: true,
    companies: ["LinkedIn", "Google", "Bloomberg"]
  },
  {
    id: 64,
    name: "Number of Connected Components in an Undirected Graph",
    url:
      "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    pattern: ["BFS", "DFS", "Graph", "Union Find"],
    difficulty: "Medium",
    premium: true,
    companies: ["Amazon", "LinkedIn", "Facebook", "Pinterest"]
  },
  {
    id: 65,
    name: "Reverse Linked List",
    url: "https://leetcode.com/problems/reverse-linked-list/",
    pattern: ["In-place reversal of a linked list", "LInkedList"],
    difficulty: "Easy",
    premium: false,
    companies: ["Microsoft", "Bloomberg", "Amazon", "Facebook", "Apple"]
  },
  {
    id: 66,
    name: "Reverse Linked List II",
    url: "https://leetcode.com/problems/reverse-linked-list-ii/",
    pattern: ["In-place reversal of a linked list", "LInkedList"],
    difficulty: "Medium",
    premium: false,
    companies: ["Apple", "Facebook", "Amazon", "Google", "Adobe"]
  },
  {
    id: 67,
    name: "Rotate List",
    url: "https://leetcode.com/problems/rotate-list/",
    pattern: ["In-place reversal of a linked list", "LInkedList"],
    difficulty: "Medium",
    premium: false,
    companies: ["Amazon", "LinkedIn", "Microsoft", "Adobe", "Apple", "Oracle"]
  },
  {
    id: 68,
    name: "Swap Nodes in Pairs",
    url: "https://leetcode.com/problems/swap-nodes-in-pairs/",
    pattern: ["In-place reversal of a linked list", "LInkedList"],
    difficulty: "Medium",
    premium: false,
    companies: ["Facebook", "Amazon", "Microsoft"]
  },
  {
    id: 69,
    name: "Odd Even Linked List",
    url: "https://leetcode.com/problems/odd-even-linked-list/",
    pattern: ["In-place reversal of a linked list", "LInkedList"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Facebook",
      "Microsoft",
      "Bloomberg",
      "Amazon",
      "Adobe",
      "Apple"
    ]
  },
  {
    id: 70,
    name: "Reverse Nodes in k-Group",
    url: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    pattern: ["In-place reversal of a linked list", "LInkedList"],
    difficulty: "Hard",
    premium: false,
    companies: [
      "Capital One",
      "Microsoft",
      "Amazon",
      "Google",
      "Facebook",
      "Snapchat",
      "Oracle"
    ]
  },
  {
    id: 71,
    name: "Merge Two Sorted Lists",
    url: "https://leetcode.com/problems/merge-two-sorted-lists/",
    pattern: ["Two Pointers"],
    difficulty: "Easy",
    premium: false,
    companies: [
      "Amazon",
      "Facebook",
      "Microsoft",
      "Adobe",
      "Google",
      "Bloomberg",
      "Apple",
      "Uber"
    ]
  },
  {
    id: 72,
    name: "Kth Smallest Element in a Sorted Matrix",
    url:
      "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
    pattern: ["Binary Search", "Heap"],
    difficulty: "Medium",
    premium: false,
    companies: ["Facebook", "Amazon", "Microsoft", "Bloomberg"]
  },
  {
    id: 73,
    name: "Find K Pairs with Smallest Sums",
    url: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
    pattern: ["Heap"],
    difficulty: "Medium",
    premium: false,
    companies: ["LinkedIn", "Microsoft", "Apple"]
  },
  {
    id: 74,
    name: "Merge k Sorted Lists",
    url: "https://leetcode.com/problems/merge-k-sorted-lists/",
    pattern: ["Heap"],
    difficulty: "Hard",
    premium: false,
    companies: [
      "Facebook",
      "Amazon",
      "Microsoft",
      "Google",
      "Apple",
      "Bloomberg",
      "Adobe",
      "Uber",
      "Qualtrics",
      "Oracle"
    ]
  },
  {
    id: 75,
    name: "Smallest Range Covering Elements from K Lists",
    url:
      "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
    pattern: ["Heap"],
    difficulty: "Hard",
    premium: false,
    companies: ["Google", "Amazon", "Microsoft", "Pinterest"]
  },
  {
    id: 76,
    name: "Meeting Rooms",
    url: "https://leetcode.com/problems/meeting-rooms",
    pattern: ["Intervals"],
    difficulty: "Easy",
    premium: true,
    companies: ["Amazon", "Microsoft", "Facebook"]
  },
  {
    id: 77,
    name: "Merge Intervals",
    url: "https://leetcode.com/problems/merge-intervals/",
    pattern: ["Intervals"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Facebook",
      "Microsoft",
      "Salesforce",
      "Google",
      "Uber",
      "Bloomberg",
      "Adobe",
      "Apple",
      "LinkedIn",
      "Twitter",
      "Oracle",
      "JPMorgan",
      "Snapchat"
    ]
  },
  {
    id: 78,
    name: "Interval List Intersections",
    url: "https://leetcode.com/problems/interval-list-intersections/",
    pattern: ["Intervals"],
    difficulty: "Medium",
    premium: false,
    companies: ["Facebook", "Uber", "Google"]
  },
  {
    id: 79,
    name: "Non-overlapping Intervals",
    url: "https://leetcode.com/problems/non-overlapping-intervals/",
    pattern: ["Intervals"],
    difficulty: "Medium",
    premium: false,
    companies: ["Amazon", "Facebook", "Oracle"]
  },
  {
    id: 80,
    name: "Meeting Rooms II",
    url: "https://leetcode.com/problems/meeting-rooms-ii/",
    pattern: ["Heap", "Intervals"],
    difficulty: "Medium",
    premium: true,
    companies: [
      "Amazon",
      "Facebook",
      "Bloomberg",
      "Microsoft",
      "Google",
      "Oracle",
      "Uber",
      "Twitter",
      "Snapchat",
      "Qualtrics",
      "Adobe",
      "Quora",
      "Goldman Sachs"
    ]
  },
  {
    id: 81,
    name: "Task Scheduler",
    url: "https://leetcode.com/problems/task-scheduler/",
    pattern: ["Greedy", "Heap"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Facebook",
      "Google",
      "Uber",
      "Amazon",
      "Microsoft",
      "Salesforce"
    ]
  },
  {
    id: 82,
    name: "Minimum Number of Arrows to Burst Balloons",
    url:
      "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
    pattern: ["Greedy"],
    difficulty: "Medium",
    premium: false,
    companies: ["Apple"]
  },
  {
    id: 83,
    name: "Insert Interval",
    url: "https://leetcode.com/problems/insert-interval/",
    pattern: ["Intervals"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Google",
      "Facebook",
      "LinkedIn",
      "Microsoft",
      "Twitter",
      "Citadel"
    ]
  },
  {
    id: 84,
    name: "Employee Free Time",
    url: "https://leetcode.com/problems/employee-free-time/",
    pattern: ["Heap", "Greedy"],
    difficulty: "Hard",
    premium: true,
    companies: [
      "Pinterest",
      "Amazon",
      "Airbnb",
      "Snapchat",
      "Google",
      "Facebook",
      "Apple",
      "Oracle",
      "Uber"
    ]
  },
  {
    id: 85,
    name: "Binary Search",
    url: "https://leetcode.com/problems/binary-search/",
    pattern: ["Binary Search"],
    difficulty: "Easy",
    premium: false,
    companies: ["Adobe", "Apple", "Uber", "Goldman Sachs"]
  },
  {
    id: 86,
    name: "Find Smallest Letter Greater Than Target",
    url:
      "https://leetcode.com/problems/find-smallest-letter-greater-than-target/",
    pattern: ["Binary Search"],
    difficulty: "Easy",
    premium: false,
    companies: ["LinkedIn"]
  },
  {
    id: 87,
    name: "Peak Index in a Mountain Array",
    url: "https://leetcode.com/problems/peak-index-in-a-mountain-array/",
    pattern: ["Binary Search"],
    difficulty: "Easy",
    premium: false,
    companies: ["Google", "Amazon", "Bloomberg", "Facebook"]
  },
  {
    id: 88,
    name: "Find Minimum in Rotated Sorted Array",
    url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    pattern: ["Binary Search"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Facebook",
      "Microsoft",
      "Amazon",
      "Bloomberg",
      "Uber",
      "Adobe",
      "Apple"
    ]
  },
  {
    id: 89,
    name: "Find Peak Element",
    url: "https://leetcode.com/problems/find-peak-element/",
    pattern: ["Binary Search"],
    difficulty: "Medium",
    premium: false,
    companies: ["Facebook", "Amazon", "Uber", "Google", "Microsoft"]
  },
  {
    id: 90,
    name: "Search in Rotated Sorted Array",
    url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    pattern: ["Binary Search"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Microsoft",
      "Amazon",
      "LinkedIn",
      "Facebook",
      "Bloomberg",
      "Adobe",
      "Apple",
      "Goldman Sachs",
      "Oracle",
      "Uber",
      "Morgan Stanley"
    ]
  },
  {
    id: 91,
    name: "Search in Rotated Sorted Array II",
    url: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
    pattern: ["Binary Search"],
    difficulty: "Medium",
    premium: false,
    companies: ["LinkedIn", "Amazon", "Facebook", "Microsoft"]
  },
  {
    id: 92,
    name: "Search a 2D Matrix",
    url: "https://leetcode.com/problems/search-a-2d-matrix/",
    pattern: ["Binary Search"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Facebook",
      "Bloomberg",
      "Microsoft",
      "Uber",
      "Google",
      "Apple"
    ]
  },
  {
    id: 93,
    name: "Search a 2D Matrix II",
    url: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
    pattern: ["Binary Search"],
    difficulty: "Medium",
    premium: false,
    companies: ["Microsoft", "Amazon", "Facebook", "Apple", "Uber"]
  },
  {
    id: 94,
    name: "Find K Closest Elements",
    url: "https://leetcode.com/problems/find-k-closest-elements/",
    pattern: ["Binary Search"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Facebook",
      "Amazon",
      "Google",
      "Uber",
      "Microsoft",
      "Bloomberg"
    ]
  },
  {
    id: 95,
    name: "Count of Range Sum",
    url: "https://leetcode.com/problems/count-of-range-sum/",
    pattern: ["Binary Search"],
    difficulty: "Hard",
    premium: false,
    companies: ["Google"]
  },
  {
    id: 96,
    name: "Minimum Size Subarray Sum",
    url: "https://leetcode.com/problems/minimum-size-subarray-sum/",
    pattern: ["Sliding Window"],
    difficulty: "Medium",
    premium: false,
    companies: ["Goldman Sachs", "Facebook", "Amazon", "Google"]
  },
  {
    id: 97,
    name: "Fruit Into Baskets",
    url: "https://leetcode.com/problems/fruit-into-baskets/",
    pattern: ["Sliding Window"],
    difficulty: "Medium",
    premium: false,
    companies: ["Amazon"]
  },
  {
    id: 98,
    name: "Permutation in String",
    url: "https://leetcode.com/problems/permutation-in-string/",
    pattern: ["Sliding Window"],
    difficulty: "Medium",
    premium: false,
    companies: ["Oracle", "Facebook"]
  },
  {
    id: 99,
    name: "Longest Repeating Character Replacement",
    url:
      "https://leetcode.com/problems/longest-repeating-character-replacement/",
    pattern: ["Sliding Window"],
    difficulty: "Medium",
    premium: false,
    companies: ["Facebook", "Uber", "Amazon", "Adobe"]
  },
  {
    id: 100,
    name: "Sliding Window Maximum",
    url: "https://leetcode.com/problems/sliding-window-maximum/",
    pattern: ["Sliding Window"],
    difficulty: "Hard",
    premium: false,
    companies: [
      "Amazon",
      "Facebook",
      "Goldman Sachs",
      "Citadel",
      "Google",
      "Uber",
      "Microsoft",
      "Salesforce",
      "Apple",
      "Twitter",
      "Atlassian"
    ]
  },
  {
    id: 101,
    name: "Longest Substring Without Repeating Characters",
    url:
      "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    pattern: ["Sliding Window"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Microsoft",
      "Bloomberg",
      "Facebook",
      "Adobe",
      "Google",
      "Apple",
      "Uber",
      "Goldman Sachs"
    ]
  },
  {
    id: 102,
    name: "Minimum Number of K Consecutive Bit Flips",
    url:
      "https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/",
    pattern: ["Sliding Window"],
    difficulty: "Hard",
    premium: false,
    companies: ["Adobe"]
  },
  {
    id: 103,
    name: "Count Unique Characters of All Substrings of a Given String",
    url:
      "https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/",
    pattern: ["Sliding Window"],
    difficulty: "Hard",
    premium: false,
    companies: ["Amazon"]
  },
  {
    id: 104,
    name: "Minimum Window Substring",
    url: "https://leetcode.com/problems/minimum-window-substring/",
    pattern: ["Sliding Window"],
    difficulty: "Hard",
    premium: false,
    companies: [
      "Facebook",
      "Amazon",
      "LinkedIn",
      "Snapchat",
      "Google",
      "Lyft",
      "Adobe"
    ]
  },
  {
    id: 105,
    name: "Substring with Concatenation of All Words",
    url:
      "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
    pattern: ["Sliding Window"],
    difficulty: "Hard",
    premium: false,
    companies: ["Apple"]
  },
  {
    id: 106,
    name: "Kth Smallest Element in a BST",
    url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    pattern: ["DFS"],
    difficulty: "Medium",
    premium: false,
    companies: ["Amazon", "Facebook"]
  },
  {
    id: 107,
    name: "K Closest Points to Origin",
    url: "https://leetcode.com/problems/k-closest-points-to-origin/",
    pattern: ["Heap"],
    difficulty: "Medium",
    premium: false,
    companies: ["Facebook", "Amazon", "LinkedIn", "Google", "Asana"]
  },
  {
    id: 108,
    name: "Top K Frequent Elements",
    url: "https://leetcode.com/problems/top-k-frequent-elements/",
    pattern: ["Heap"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Facebook",
      "Amazon",
      "Bloomberg",
      "Microsoft",
      "Uber",
      "Apple",
      "Google",
      "Adobe",
      "Snapchat",
      "Oracle",
      "LinkedIn"
    ]
  },
  {
    id: 109,
    name: "Sort Characters By Frequency",
    url: "https://leetcode.com/problems/sort-characters-by-frequency/",
    pattern: ["Heap"],
    difficulty: "Medium",
    premium: false,
    companies: ["Amazon", "Bloomberg", "Facebook"]
  },
  {
    id: 110,
    name: "Kth Largest Element in an Array",
    url: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    pattern: ["Heap", "QuickSelect"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Facebook",
      "Amazon",
      "LinkedIn",
      "Microsoft",
      "Google",
      "Goldman Sachs",
      "Uber",
      "Oracle"
    ]
  },
  {
    id: 111,
    name: "Reorganize String",
    url: "https://leetcode.com/problems/reorganize-string/",
    pattern: ["Greedy", "Heap"],
    difficulty: "Medium",
    premium: false,
    companies: ["Amazon", "Facebook", "Google", "Apple", "Uber", "Microsoft"]
  },
  {
    id: 112,
    name: "Rearrange String k Distance Apart",
    url: "https://leetcode.com/problems/rearrange-string-k-distance-apart",
    pattern: ["Greedy", "Heap"],
    difficulty: "Hard",
    premium: true,
    companies: ["Twitter"]
  },
  {
    id: 113,
    name: "Course Schedule III",
    url: "https://leetcode.com/problems/course-schedule-iii/",
    pattern: ["Greedy", "Heap"],
    difficulty: "Hard",
    premium: false,
    companies: ["Amazon"]
  },
  {
    id: 114,
    name: "Maximum Frequency Stack",
    url: "https://leetcode.com/problems/maximum-frequency-stack/",
    pattern: ["Bucket Sort", "Heap"],
    difficulty: "Hard",
    premium: false,
    companies: ["Microsoft", "Amazon", "Apple", "Facebook"]
  },
  {
    id: 115,
    name: "Course Schedule",
    url: "https://leetcode.com/problems/course-schedule/",
    pattern: ["BFS", "DFS", "Graph", "Topological Sort"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Microsoft",
      "Facebook",
      "Google",
      "Oracle",
      "Apple",
      "Snapchat"
    ]
  },
  {
    id: 116,
    name: "Course Schedule II",
    url: "https://leetcode.com/problems/course-schedule-ii/",
    pattern: ["BFS", "DFS", "Graph", "Topological Sort"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Microsoft",
      "Google",
      "Facebook",
      "Snapchat",
      "Uber",
      "Apple",
      "Lyft",
      "Bloomberg"
    ]
  },
  {
    id: 117,
    name: "Minimum Height Trees",
    url: "https://leetcode.com/problems/minimum-height-trees/",
    pattern: ["BFS", "Graph", "Topological Sort"],
    difficulty: "Medium",
    premium: false,
    companies: ["Amazon", "Facebook", "Google", "Microsoft"]
  },
  {
    id: 118,
    name: "Alien Dictionary",
    url: "https://leetcode.com/problems/alien-dictionary",
    pattern: ["Graph", "Topological Sort"],
    difficulty: "Hard",
    premium: true,
    companies: [
      "Facebook",
      "Google",
      "Amazon",
      "Airbnb",
      "Pinterest",
      "Uber",
      "Microsoft"
    ]
  },
  {
    id: 119,
    name: "Sequence Reconstruction",
    url: "https://leetcode.com/problems/sequence-reconstruction",
    pattern: ["Graph", "Topological Sort"],
    difficulty: "Medium",
    premium: true,
    companies: ["Google"]
  },
  {
    id: 120,
    name: "Binary Tree Level Order Traversal II",
    url: "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
    pattern: ["BFS"],
    difficulty: "Medium",
    premium: false,
    companies: ["Amazon"]
  },

  {
    id: 121,
    name: "Average of Levels in Binary Tree",
    url: "https://leetcode.com/problems/average-of-levels-in-binary-tree/",
    pattern: ["BFS"],
    difficulty: "Easy",
    premium: false,
    companies: ["Facebook", "Amazon"]
  },
  {
    id: 122,
    name: "Minimum Depth of Binary Tree",
    url: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
    pattern: ["BFS", "DFS"],
    difficulty: "Easy",
    premium: false,
    companies: ["Facebook", "Goldman Sachs"]
  },
  {
    id: 123,
    name: "Binary Tree Level Order Traversal",
    url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    pattern: ["BFS"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "LinkedIn",
      "Amazon",
      "Facebook",
      "Bloomberg",
      "Microsoft",
      "Apple",
      "Oracle",
      "Google"
    ]
  },
  {
    id: 124,
    name: "Binary Tree Zigzag Level Order Traversal",
    url:
      "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
    pattern: ["BFS"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Facebook",
      "Microsoft",
      "Bloomberg",
      "Google",
      "Adobe",
      "LinkedIn",
      "Qualtrics",
      "Salesforce"
    ]
  },
  {
    id: 125,
    name: "Populating Next Right Pointers in Each Node",
    url:
      "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
    pattern: ["BFS"],
    difficulty: "Medium",
    premium: false,
    companies: ["Facebook", "Microsoft", "Amazon", "Bloomberg"]
  },
  {
    id: 126,
    name: "Populating Next Right Pointers in Each Node II",
    url:
      "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
    pattern: ["BFS"],
    difficulty: "Medium",
    premium: false,
    companies: ["Amazon", "Bloomberg", "Microsoft", "Facebook"]
  },
  {
    id: 127,
    name: "Binary Tree Right Side View",
    url: "https://leetcode.com/problems/binary-tree-right-side-view/",
    pattern: ["BFS", "DFS"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Facebook",
      "Bloomberg",
      "Amazon",
      "Oracle",
      "Qualtrics",
      "Adobe",
      "Goldman Sachs"
    ]
  },
  {
    id: 128,
    name: "All Nodes Distance K in Binary Tree",
    url: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
    pattern: ["BFS", "DFS"],
    difficulty: "Medium",
    premium: false,
    companies: ["Facebook", "Amazon", "Apple", "Oracle"]
  },
  {
    id: 129,
    name: "Same Tree",
    url: "https://leetcode.com/problems/same-tree/",
    pattern: ["DFS"],
    difficulty: "Easy",
    premium: false,
    companies: [
      "LinkedIn",
      "Google",
      "Microsoft",
      "Amazon",
      "Facebook",
      "Apple",
      "Adobe",
      "Oracle"
    ]
  },
  {
    id: 130,
    name: "Path Sum",
    url: "https://leetcode.com/problems/path-sum/",
    pattern: ["DFS"],
    difficulty: "Easy",
    premium: false,
    companies: ["Amazon", "Facebook", "Oracle"]
  },
  {
    id: 131,
    name: "Diameter of Binary Tree",
    url: "https://leetcode.com/problems/diameter-of-binary-tree/",
    pattern: ["DFS"],
    difficulty: "Easy",
    premium: false,
    companies: [
      "Facebook",
      "Amazon",
      "Google",
      "Bloomberg",
      "Apple",
      "Microsoft",
      "Adobe"
    ]
  },
  {
    id: 132,
    name: "Merge Two Binary Trees",
    url: "https://leetcode.com/problems/merge-two-binary-trees/",
    pattern: ["DFS"],
    difficulty: "Easy",
    premium: false,
    companies: ["Amazon", "Adobe"]
  },
  {
    id: 133,
    name: "Maximum Depth of Binary Tree",
    url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    pattern: ["DFS"],
    difficulty: "Easy",
    premium: false,
    companies: ["LinkedIn", "Google", "Apple", "Amazon"]
  },
  {
    id: 134,
    name: "Lowest Common Ancestor of a Binary Search Tree",
    url:
      "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    pattern: ["DFS"],
    difficulty: "Easy",
    premium: false,
    companies: ["LinkedIn", "Facebook", "Microsoft", "Google", "Uber"]
  },
  {
    id: 135,
    name: "Subtree of Another Tree",
    url: "https://leetcode.com/problems/subtree-of-another-tree/",
    pattern: ["DFS"],
    difficulty: "Easy",
    premium: false,
    companies: ["Facebook", "Amazon", "Microsoft"]
  },
  {
    id: 136,
    name: "Invert Binary Tree",
    url: "https://leetcode.com/problems/invert-binary-tree/",
    pattern: ["DFS"],
    difficulty: "Easy",
    premium: false,
    companies: ["Amazon", "Google", "Facebook", "Adobe", "Apple"]
  },
  {
    id: 137,
    name: "Path Sum II",
    url: "https://leetcode.com/problems/path-sum-ii/",
    pattern: ["DFS"],
    difficulty: "Medium",
    premium: false,
    companies: ["Amazon", "Google", "Facebook", "Adobe", "Apple"]
  },
  {
    id: 138,
    name: "Path Sum III",
    url: "https://leetcode.com/problems/path-sum-iii/",
    pattern: ["DFS"],
    difficulty: "Medium",
    premium: false,
    companies: ["Microsoft", "Facebook", "Google", "Oracle"]
  },
  {
    id: 139,
    name: "Lowest Common Ancestor of a Binary Tree",
    url:
      "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    pattern: ["DFS"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Facebook",
      "Amazon",
      "LinkedIn",
      "Google",
      "Microsoft",
      "Adobe",
      "Apple",
      "Salesforce",
      "Oracle",
      "Bloomberg",
      "Intuit"
    ]
  },
  {
    id: 140,
    name: "Maximum Binary Tree",
    url: "https://leetcode.com/problems/maximum-binary-tree/",
    pattern: ["DFS"],
    difficulty: "Medium",
    premium: false,
    companies: ["Amazon"]
  },
  {
    id: 141,
    name: "Maximum Width of Binary Tree",
    url: "https://leetcode.com/problems/maximum-width-of-binary-tree/",
    pattern: ["DFS"],
    difficulty: "Medium",
    premium: false,
    companies: ["Amazon", "Google", "Bloomberg", "Apple", "Adobe"]
  },
  {
    id: 142,
    name: "Construct Binary Tree from Preorder and Inorder Traversal",
    url:
      "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    pattern: ["DFS"],
    difficulty: "Medium",
    premium: false,
    companies: ["Amazon", "Microsoft", "Adobe", "Bloomberg", "Apple"]
  },
  {
    id: 143,
    name: "Validate Binary Search Tree",
    url: "https://leetcode.com/problems/validate-binary-search-tree/",
    pattern: ["DFS"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Bloomberg",
      "Microsoft",
      "Facebook",
      "Google",
      "Adobe",
      "Apple",
      "Qualtrics",
      "Lyft"
    ]
  },
  {
    id: 144,
    name: "Implement Trie (Prefix Tree)",
    url: "https://leetcode.com/problems/implement-trie-prefix-tree/",
    pattern: ["Design", "Trie"],
    difficulty: "Medium",
    premium: false,
    companies: ["Amazon", "Twitter", "Google", "Facebook", "Microsoft", "Apple"]
  },
  {
    id: 145,
    name: "Binary Tree Maximum Path Sum",
    url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    pattern: ["DFS"],
    difficulty: "Hard",
    premium: false,
    companies: [
      "Facebook",
      "Amazon",
      "Google",
      "Microsoft",
      "Adobe",
      "Bloomberg",
      "Oracle",
      "Snapchat"
    ]
  },
  {
    id: 146,
    name: "Serialize and Deserialize Binary Tree",
    url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    pattern: ["Design"],
    difficulty: "Hard",
    premium: false,
    companies: [
      "LinkedIn",
      "Amazon",
      "Microsoft",
      "Facebook",
      "Oracle",
      "Uber",
      "Adobe",
      "Snapchat",
      "Qualtrics",
      "Google",
      "Quora"
    ]
  },
  {
    id: 147,
    name: "Word Search II",
    url: "https://leetcode.com/problems/word-search-ii/",
    pattern: ["DFS", "Trie"],
    difficulty: "Hard",
    premium: false,
    companies: [
      "Amazon",
      "Uber",
      "Microsoft",
      "Apple",
      "Twitter",
      "Snapchat",
      "Facebook",
      "Bloomberg",
      "Google",
      "Salesforce"
    ]
  },
  {
    id: 148,
    name: "Find Median from Data Stream",
    url: "https://leetcode.com/problems/find-median-from-data-stream/",
    pattern: ["Heap"],
    difficulty: "Hard",
    premium: false,
    companies: [
      "Amazon",
      "Microsoft",
      "Apple",
      "Facebook",
      "Google",
      "Bloomberg",
      "Uber",
      "Airbnb"
    ]
  },
  {
    id: 149,
    name: "Sliding Window Median",
    url: "https://leetcode.com/problems/sliding-window-median/",
    pattern: ["Heap"],
    difficulty: "Hard",
    premium: false,
    companies: ["Facebook", "Amazon"]
  },
  {
    id: 150,
    name: "Two Sum",
    url: "https://leetcode.com/problems/two-sum/",
    pattern: ["Two Pointers"],
    difficulty: "Easy",
    premium: false,
    companies: [
      "Amazon",
      "Google",
      "Adobe",
      "Apple",
      "Microsoft",
      "Facebook",
      "Bloomberg",
      "Uber",
      "Oracle",
      "Morgan Stanley",
      "Citadel",
      "Salesforce",
      "Goldman Sachs",
      "JPMorgan",
      "Snapchat"
    ]
  },
  {
    id: 151,
    name: "Squares of a Sorted Array",
    url: "https://leetcode.com/problems/squares-of-a-sorted-array/",
    pattern: ["Two Pointers"],
    difficulty: "Easy",
    premium: false,
    companies: ["Facebook", "Amazon", "Google", "Adobe", "Apple", "Uber"]
  },
  {
    id: 152,
    name: "Backspace String Compare",
    url: "https://leetcode.com/problems/backspace-string-compare/",
    pattern: ["Two Pointers"],
    difficulty: "Easy",
    premium: false,
    companies: ["Facebook", "Amazon", "Apple", "Google", "Microsoft"]
  },
  {
    id: 153,
    name: "3 Sum",
    url: "https://leetcode.com/problems/3sum/",
    pattern: ["Two Pointers"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Facebook",
      "Apple",
      "Microsoft",
      "Adobe",
      "Google",
      "Bloomberg",
      "Intuit",
      "Qualtrics",
      "Salesforce",
      "Goldman Sachs",
      "Uber",
      "Oracle"
    ]
  },
  {
    id: 154,
    name: "3 Sum Closest",
    url: "https://leetcode.com/problems/3sum-closest/",
    pattern: ["Two Pointers"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Facebook",
      "Amazon",
      "Capital One",
      "Apple",
      "Google",
      "Adobe",
      "Microsoft",
      "Oracle"
    ]
  },
  {
    id: 155,
    name: "Subarrays with Product Less than K",
    url: "https://leetcode.com/problems/subarray-product-less-than-k/",
    pattern: ["Two Pointers"],
    difficulty: "Medium",
    premium: false,
    companies: ["LinkedIn", "Amazon", "Microsoft"]
  },
  {
    id: 156,
    name: "Sort Colours",
    url: "https://leetcode.com/problems/sort-colors/",
    pattern: ["Two Pointers"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Microsoft",
      "Amazon",
      "Adobe",
      "Facebook",
      "Apple",
      "Salesforce",
      "Bloomberg"
    ]
  },
  {
    id: 157,
    name: "Trapping Rain Water",
    url: "https://leetcode.com/problems/trapping-rain-water/",
    pattern: ["Two Pointers"],
    difficulty: "Hard",
    premium: false,
    companies: [
      "Facebook",
      "Amazon",
      "Goldman Sachs",
      "Microsoft",
      "Adobe",
      "Google",
      "Bloomberg",
      "Qualtrics",
      "Snapchat",
      "Lyft",
      "Uber",
      "Apple",
      "Citadel",
      "Tesla"
    ]
  },
  {
    id: 158,
    name: "Container With Most Water",
    url: "https://leetcode.com/problems/container-with-most-water/",
    pattern: ["Two Pointers"],
    difficulty: "Medium",
    premium: false,
    companies: [
      "Amazon",
      "Microsoft",
      "Google",
      "Adobe",
      "Bloomberg",
      "Apple",
      "Uber",
      "Facebook"
    ]
  },
  {
    id: 159,
    name: "Longest Word in Dictionary",
    url: "https://leetcode.com/problems/longest-word-in-dictionary/",
    pattern: ["Trie"],
    difficulty: "Medium",
    premium: false,
    companies: ["Google"]
  },
  {
    id: 160,
    name: "Index Pairs of a String",
    url: "https://leetcode.com/problems/index-pairs-of-a-string/",
    pattern: ["Trie"],
    difficulty: "Easy",
    premium: true,
    companies: ["Amazon"]
  },
  {
    id: 161,
    name: "Maximum XOR of Two Numbers in an Array",
    url: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array",
    pattern: ["Trie"],
    difficulty: "Medium",
    premium: false,
    companies: ["Adobe"]
  },
  {
    id: 162,
    name: "Concatenated Words",
    url: "https://leetcode.com/problems/concatenated-words/",
    pattern: ["Trie"],
    difficulty: "Hard",
    premium: false,
    companies: ["Amazon", "Microsoft"]
  },
  {
    id: 163,
    name: "Prefix and Suffix Search",
    url: "https://leetcode.com/problems/prefix-and-suffix-search/",
    pattern: ["Trie"],
    difficulty: "Hard",
    premium: false,
    companies: ["Google"]
  },
  {
    id: 164,
    name: "Palindrome Pairs",
    url: "https://leetcode.com/problems/palindrome-pairs/",
    pattern: ["Trie"],
    difficulty: "Hard",
    premium: false,
    companies: ["Airbnb", "Facebook", "Google"]
  },
  {
    id: 165,
    name: "Design Search Autocomplete System",
    url: "https://leetcode.com/problems/design-search-autocomplete-system/",
    pattern: ["Trie"],
    difficulty: "Hard",
    premium: true,
    companies: ["Amazon", "Google", "Microsoft", "Uber", "Bloomberg", "Twitter"]
  },
  {
    id: 166,
    name: "Word Squares",
    url: "https://leetcode.com/problems/word-squares/",
    pattern: ["Trie"],
    difficulty: "Hard",
    premium: true,
    companies: ["Bloomberg", "Oracle", "Google"]
  },
  {
    id: 167,
    name: "Sort Items by Groups Respecting Dependencies",
    url:
      "https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/",
    pattern: ["DFS", "Graph", "Topological Sort"],
    difficulty: "Hard",
    premium: false,
    companies: ["Apple"]
  },
  {
    id: 168,
    name: "Median of Two Sorted Arrays",
    url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    pattern: ["Binary Search"],
    difficulty: "Hard",
    premium: false,
    companies: [
      "Amazon",
      "Goldman Sachs",
      "Microsoft",
      "Google",
      "Adobe",
      "Facebook",
      "Apple",
      "Bloomberg",
      "Oracle"
    ]
  },
  {
    id: 169,
    name: "Majority Element",
    url: "https://leetcode.com/problems/majority-element/",
    pattern: ["Sorting"],
    difficulty: "Easy",
    premium: false,
    companies: ["Amazon", "Facebook", "Apple", "Microsoft", "Adobe"]
  },
  {
    id: 170,
    name: "Convert 1D Array Into 2D Array",
    url: "https://leetcode.com/problems/convert-1d-array-into-2d-array/",
    pattern: ["Arrays"],
    difficulty: "Easy",
    premium: false,
    companies: ["Google"]
  },
  //////////////////////////////////////////////////////
  {
    id: 171,
    name: "Valid Anagram",
    url: "https://leetcode.com/problems/valid-anagram/",
    pattern: ["Strings"],
    difficulty: "Easy",
    premium: false,
    companies: []
  },
  {
    id: 172,
    name: "Permutation in string",
    url: "https://leetcode.com/problems/permutation-in-string/",
    pattern: ["Strings"],
    difficulty: "Easy",
    premium: false,
    companies: ["CITI"],
    source: "CITI"
  },
  {
    id: 173,
    name: "Edit distance",
    url: "https://leetcode.com/problems/edit-distance/",
    pattern: ["Strings"],
    difficulty: "Hard",
    premium: false,
    companies: ["CITI"],
    source: "CITI"
  },
  {
    id: 174,
    name: "String compression",
    url: "https://leetcode.com/problems/string-compression/",
    pattern: ["Strings"],
    difficulty: "Medium",
    premium: false,
    companies: ["CITI"],
    source: "CITI"
  },
  {
    id: 175,
    name: "Rotate string",
    url: "https://leetcode.com/problems/rotate-string/",
    pattern: ["Strings"],
    difficulty: "Easy",
    premium: false,
    companies: ["CITI"],
    source: "CITI"
  },
  /////////////////////////////////////
  {
    id: 175,
    name: "Remove duplicates from unsorted list",
    url:
      "https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/",
    pattern: ["LinkedList"],
    difficulty: "Easy",
    premium: false,
    companies: ["CITI"],
    source: "CITI"
  },
  {
    id: 176,
    name: "Delete node in a linked list",
    url: "https://leetcode.com/problems/delete-node-in-a-linked-list/",
    pattern: ["LinkedList"],
    difficulty: "Easy",
    premium: false,
    companies: ["CITI"],
    source: "CITI"
  },
  {
    id: 177,
    name: "Add two numbers II",
    url: "https://leetcode.com/problems/add-two-numbers-ii/",
    pattern: ["LinkedList"],
    difficulty: "Medium",
    premium: false,
    companies: ["CITI"],
    source: "CITI"
  },
  {
    id: 178,
    name: "Intersection of 2 linked list",
    url: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    pattern: ["LinkedList"],
    difficulty: "Easy",
    premium: false,
    companies: ["CITI"],
    source: "CITI"
  },
  {
    id: 179,
    name: "Min Stack",
    url: "https://leetcode.com/problems/min-stack/",
    pattern: ["Stacks"],
    difficulty: "Easy",
    premium: false,
    companies: ["CITI"],
    source: "CITI"
  },
  {
    id: 180,
    name: "Dinner plate stacks",
    url: "https://leetcode.com/problems/dinner-plate-stacks/",
    pattern: ["Stacks"],
    difficulty: "Hard",
    premium: false,
    companies: ["CITI"],
    source: "CITI"
  },
  //////////////////////////////

  {
    id: 181,
    name: "Find if path exist in graph",
    url: "https://leetcode.com/problems/find-if-path-exists-in-graph/",
    pattern: ["Graph"],
    difficulty: "Easy",
    premium: false,
    companies: ["CITI"],
    source: "CITI"
  },
  {
    id: 182,
    name: "Convert Sorted Array to Binary Search Tree",
    url:
      "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
    pattern: ["Graph"],
    difficulty: "Easy",
    premium: false,
    companies: ["CITI"],
    source: "CITI"
  },
  {
    id: 183,
    name: "Binary tree level order traversal",
    url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    pattern: ["BFS"],
    difficulty: "Medium",
    premium: false,
    companies: ["CITI"],
    source: "CITI"
  },
  {
    id: 184,
    name: "Balanced Binary Tree",
    url: "https://leetcode.com/problems/balanced-binary-tree/",
    pattern: ["Trees"],
    difficulty: "Easy",
    premium: false,
    companies: ["CITI"],
    source: "CITI"
  },
  {
    id: 185,
    name: "Binary tree level order traversal",
    url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    pattern: ["BFS"],
    difficulty: "Medium",
    premium: false,
    companies: ["CITI"],
    source: "CITI"
  },
  {
    id: 183,
    name: "Binary tree level order traversal",
    url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    pattern: ["BFS"],
    difficulty: "Medium",
    premium: false,
    companies: ["CITI"],
    source: "CITI"
  },
  {
    id: 183,
    name: "Binary tree level order traversal",
    url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    pattern: ["BFS"],
    difficulty: "Medium",
    premium: false,
    companies: ["CITI"],
    source: "CITI"
  }
];

const sortBy = { Easy: 0, Medium: 1, Hard: 2 };

export default questions.sort(
  (a, b) => sortBy[a.difficulty] - sortBy[b.difficulty]
);
