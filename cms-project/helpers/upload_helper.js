module.exports = {
    isEmpty: function (obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false; 
            }
        }
        return true; 
    }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
}; 



