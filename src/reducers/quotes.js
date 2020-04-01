export default (state = [], action) => {
  let quote; 

  switch(action.type){
    case "ADD_QUOTE": 
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id != action.quoteId)
    // case "UPVOTE_QUOTE":
    //     debugger;
    //     let foundQuoteIndex = state.findIndex(quote => quote.id === action.quoteId)
    //     let foundQuote = state.find(quote => quote.id === action.quoteId)
    //     foundQuote.votes += 1
    //     let copyState = [...state]
    //     copyState.splice(foundQuoteIndex,1)
    //     state = [...copyState,foundQuote]
    //     return state 
    case 'UPVOTE_QUOTE':
      let updatedQuotes = state.map(quote => {
        if (quote.id === action.quoteId) {
          return {...quote, votes: quote.votes += 1}
        } else {
          return quote
        }
      })
      return updatedQuotes
      case "DOWNVOTE_QUOTE": 
        let foundQuoteIndex2 = state.findIndex(quote => quote.id === action.quoteId)
        let foundQuote2 = state.find(quote => quote.id === action.quoteId)
        if(foundQuote2.votes > 0) { foundQuote2.votes  -= 1}
        let copyState2 = [...state]
        copyState2.splice(foundQuoteIndex2,1)
        state = [...copyState2,foundQuote2]
        return state 
    default:
      return state
  }
}
