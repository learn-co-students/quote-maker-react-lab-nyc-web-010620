export default (state = [], action) => {

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      // debugger
      // return [...state, action.quoteId.votes += 1]
      let quoteToVote = state.find(quote => quote.id === action.quoteId)
        quoteToVote.votes += 1
          return state
    case "DOWNVOTE_QUOTE":
      // return action.quoteId.votes > 0 ? [...state, action.quote.votes - 1] : [...state]
      let quoteToUnVote = state.find(quote => quote.id === action.quoteId)
        if (quoteToUnVote.votes > 0) {quoteToUnVote.votes -= 1}
          return state
    default:
      return state
  }
}
