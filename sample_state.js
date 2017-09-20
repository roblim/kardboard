{
  entities: {
    users: {
      1: {
        id: 1,
        name: "Yayoi Kusama"
      }
    },
    boards: {
      1: {
        id: 1,
        title: "Groceries",
        user_id: 1,
        starred: false,
        lists: [43, 44, 45, 46],
        collaborators: [2, 3, 6]
      },
      2: {
        id: 2,
        title: "Dream Wedding",
        user_id: 1,
        starred: true,
        lists: [43, 44, 45, 46],
        collaborators: [2, 3, 6]
      }
    },
    lists: {
      1: {
        id: 1,
        title: "Vegetables",
        board_id: 23,
        cards: [23, 34, 56, 76]
      },
      2: {
        id: 2,
        title: "Fruits",
        board_id: 43,
        cards: [23, 43, 45]
      }
    },
    cards: {
      1: {
        id: 1,
        title: "Beets",
        description: "Root vegetable",
        due_date: null,
        list_id: 3,
        comments: [23, 43, 34, 54]
      },
      2: {
        id: 2,
        title: "Oranges",
        description: "Not a vegetable",
        due_date: null,
        list_id: 3,
        comments: [23, 43, 34, 54]
      }
    },
    comments: {
      1: {
        id: 1,
        body: "I hate beets.",
        card_id: 3,
        author_id: 23
      },
      2: {
        id: 2,
        body: "I love oranges.",
        card_id: 34,
        author_id: 234
      }
    }
  }
  session: {
    currentUser: {
      id: 1,
      name: "Yayoi Kusama",
      email: "y.kusama@art.jp"
    }
  },
  errors: {
    session: ["Invalid username or password"],
    signup: ["Password must be at least 6 characters"]
  }
}
