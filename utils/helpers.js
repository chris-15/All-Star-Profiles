module.exports = {
  // function to format a date
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    // format to check if words need to be plural or not
    //used to display how many comments a post has 
    format_plural: (word, amount) => {
        if (amount !== 1) {
          return `${word}s`;
        }
    
        return word;
      },
}