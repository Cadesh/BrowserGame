//ANDRE ROSA - 25 FEB 2018
//CONVERT YEARS TO ROMAN NUMBER YEARS

//shift + alt + F to use beautifier

//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
var RomanYearConv = {

    //-------------------------------------------------------------------------
    findRomanLast: function (digit) {
        var lastDigit = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
        return lastDigit[digit];
    },
    //-------------------------------------------------------------------------
    findRomanThird: function (digit) {
        var lastDigit = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
        return lastDigit[digit];
    },
    //-------------------------------------------------------------------------
    findRomanSecond: function (digit) {
        var lastDigit = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
        return lastDigit[digit];
    },
    //-------------------------------------------------------------------------
    findRomanFirst: function (digit) {
        var lastDigit = ['', 'M', 'MM', 'MMM'];
        return lastDigit[digit];
    },

    //-------------------------------------------------------------------------
    convertYear: function (year) {

        var strYear = year.toString();
        if (this.isInt(parseInt(year)) !== true) {
            console.log("Not a valid year.");
            strYear = "";
        }
        if (year.length > 4) {
            console.log("Year must have 1-4 digits.");
            strYear = "";
        }
        if (year.length < 4) {
            for (var i = 0; i < 3; i++) {
                year = "0" + year;
                if (year.length === 4) {
                    i = 4;
                }
            }
        }

        var strYear = (this.findRomanFirst(year.charAt(0)) +
            this.findRomanSecond(year.charAt(1)) +
            this.findRomanThird(year.charAt(2)) +
            this.findRomanLast(year.charAt(3)));

        return strYear;
    },
    //-------------------------------------------------------------------------
    // CHECK IF PARAMETER IS A NUMBER
    //-------------------------------------------------------------------------
    isInt: function (data) {
        if (typeof data === 'number') { // number
            if (data % 1 === 0) { // integer
                return true;
            }
        }
        return false;
    }

};
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------


for (var i = 0; i < 20; i++) {
    var lYear = Math.floor((Math.random() * 3000) + 1);
    console.log("Modern Year: " + lYear + " Roman year: " + RomanYearConv.convertYear(String(lYear)));
}