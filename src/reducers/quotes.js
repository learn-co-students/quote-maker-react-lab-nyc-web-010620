export default (state = [], action) => {
  let quote

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id != action.quoteId)
    case "UPVOTE_QUOTE":
      let quoteToVote = state.find(quote => quote.id === action.quoteId)
        quoteToVote.votes += 1
          return state
    case "DOWNVOTE_QUOTE":
      let quoteToUnVote = state.find(quote => quote.id === action.quoteId)
        if (quoteToUnVote.votes > 0) {quoteToUnVote.votes -= 1}
          return state
    default:
      return state
  }
}
