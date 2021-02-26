class CardsService {
    CARDS =
        [
            'Át♥', '02♥', '03♥', '04♥', '05♥', '06♥', '07♥', '08♥', '09♥', '10♥', 'JJ♥', 'QQ♥', 'KK♥',
            'Át♦', '02♦', '03♦', '04♦', '05♦', '06♦', '07♦', '08♦', '09♦', '10♦', 'JJ♦', 'QQ♦', 'KK♦',
            'Át♣', '02♣', '03♣', '04♣', '05♣', '06♣', '07♣', '08♣', '09♣', '10♣', 'JJ♣', 'QQ♣', 'KK♣',
            'Át♠', '02♠', '03♠', '04♠', '05♠', '06♠', '07♠', '08♠', '09♠', '10♠', 'JJ♠', 'QQ♠', 'KK♠'
        ]
    arrCart = ['3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 't', '2']
    arrChat = ['♠', '♣', '♦', '♥']
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var numRan = getRandom(0, i)
            var temp = array[i];
            array[i] = array[numRan];
            array[numRan] = temp;
        }
        return array
    }
    getRandom(min, max) {
        max++
        return Math.floor(Math.random() * (max - min) + min)
    }
    falmOff(CARDS) {
        let cartsTemp = CARDS
        let min, max, arr1, arr2, arr3

        //Chẻ bài
        if (cartsTemp[0] == 'Át♥') {
            arr1 = cartsTemp.slice(0, 26)
            arr2 = cartsTemp.slice(26)
            cartsTemp = []
            for (let i = 0; i < 26; i++) {
                cartsTemp.push(arr1[i])
                cartsTemp.push(arr2[i])
            }
        }

        //Xáo kiểu 1
        // for (let i = 0; i < 40; i++) {
        //     min = getRandom(2, 25)
        //     max = getRandom(26, 51)
        //     arr1 = cartsTemp.slice(0, min)
        //     arr2 = cartsTemp.slice(min, max)
        //     arr3 = cartsTemp.slice(max, 52)
        //     cartsTemp = arr2.concat(arr1.concat(arr3))
        // }

        //Xáo kiểu 2
        for (let i = 0; i < 10; i++) {
            let length = 52
            let numRandom = getRandom(1, 20)
            arr1 = cartsTemp.slice(numRandom)
            cartsTemp = cartsTemp.slice(0, numRandom)
            length -= numRandom
            do {
                numRandom = getRandom(1, 10)
                cartsTemp = arr1.slice(0, numRandom).concat(cartsTemp)
                arr1 = arr1.slice(numRandom)
                length -= numRandom
            } while (length > 0)
        }

        return cartsTemp
    }
    dealCarts(carts) {
        let arr1 = [], arr2 = [], arr3 = [], arr4 = []
        do {
            arr1.push(carts.pop())
            arr2.push(carts.pop())
            arr3.push(carts.pop())
            arr4.push(carts.pop())
        } while (carts.length > 0);
        sort(arr1)
        sort(arr2)
        sort(arr3)
        sort(arr4)
        return { arr1, arr2, arr3, arr4 }
    }
    /**
     * 
     * @param {Array} cart13 
     */
    sort(cart13) {
        let temp = 0, length = 12
        do {
            for (let i = 0; i < length; i++) {
                temp = isGreater1(cart13[i], cart13[i + 1])
                if (temp == cart13[i]) {
                    cart13[i] = cart13[i + 1]
                    cart13[i + 1] = temp

                }
                temp = cart13[i + 1]
            }
            length--
        } while (length != 1)
        return cart13
    }
    /**
     * 
     * @param {String} cart1 
     * @param {String} cart2 
     */
    isGreater(cart1, cart2) {
        let num1 = cart1[1]
        let num2 = cart2[1]
        let chat1 = cart1[2]
        let chat2 = cart2[2]
        //♥ ♦ ♣ ♠
        if (num1 == num2) {
            return chat1 > chat2 ? cart1 : cart2
        }
        else {
            let val1 = arrCart.indexOf(num1)
            let val2 = arrCart.indexOf(num2)
            if (val1 > val2)
                return cart1
            return cart2
        }
    }
    isGreater1(cart1, cart2) {
        let num1 = arrCart.indexOf(cart1[1])
        let num2 = arrCart.indexOf(cart2[1])
        let chat1 = arrChat.indexOf(cart1[2])
        let chat2 = arrChat.indexOf(cart2[2])
        //♥ ♦ ♣ ♠
        num1 += '.' + chat1
        num2 += '.' + chat2
        if (num1 * 1 > num2 * 1)
            return cart1
        return cart2
    }
    /**
     * 
     * @param {Array} carts 
     */
    checkWin(carts) {
        if (carts.length == 0) {
            return true
        }
        else if (carts.length < 13) {
            return false
        }
        else {
            let token = ''
            let token1 = ''
            let strCart = carts[0][0] + carts[0][1]
            let strTemp = '0304050607080910JJQQKKÁt02'
            // 6 đôi
            let arrDoub = ''
            let canDoub = true
            let arrTripb = ''
            let canTripb = true
            for (let i = 1; i < 13; i++) {
                token = carts[i][0] + carts[i][1]
                token1 = carts[i - 1][0] + carts[i - 1][1]
                strCart += token
                if (canTripb && arrDoub.includes(token)) {
                    arrTripb += token
                    canDoub = true
                    canTripb = false
                }
                else if (canDoub && token == token1) {
                    arrDoub += token
                    canDoub = false
                }
                else {
                    canDoub = true
                    canTripb = true
                }
            }
            if (arrDoub.length == 12) {
                return '6 đôi'
            }
            else if (strTemp.includes(arrDoub) && arrDoub != '') {
                return '5 đôi thông'
            }
            else if (arrTripb.length == 8) {
                return '4 xám cô'
            }
            else if (strCart.includes('02020202')) {
                return 'tứ quý heo'
            }
            else if (strTemp.includes(strCart)) {
                return 'từ 3 tới át'
            }

        }
    }

    /**
     * 
     * @param {string} cart1 
     * @param {string} cart2 
     * @param {Array} arrInput 
     * @param {Array} playerCarts 
     * 
     */
    quickTake(arrInput, playerCarts, cartIndex1, cartIndex2) {
        let res = []
        let cart1IsGreater = isGreater(playerCarts[cartIndex1], arrInput[0])
        if (arrInput.length <= playerCarts.length) {
            if (arrInput.length == 1 && arrInput[0][1] != '2') {//Rác
                return []
            }
            else if (arrInput.length == 2 && cart1IsGreater) {//Đôi

                if (playerCarts[cartIndex1 - 1][1] == playerCarts[cartIndex1][1]) {
                    res.push(cartIndex1 - 1)
                    res.push(cartIndex1)
                }
                else if (playerCarts[cartIndex1 + 1][1] == playerCarts[cartIndex1][1]) {
                    res.push(cartIndex1)
                    res.push(cartIndex1 + 1)
                }

                if (res.length == 2 && isGreater(res[res.length - 1], arrInput[arrInput.length - 1])) {
                    return res
                }
                return []
            }
            else if (arrInput.length == 3 && arrInput[0][1] == arrInput[2][1] && cart1IsGreater) {//Sám
                let canTripb = 0
                let i = cartIndex1 - 2
                i < 0 ? i = 0 : i = i
                for (i; i < cartIndex1 + 3 || i < 13; i++) {
                    if (playerCarts[i][1] == playerCarts[cartIndex1][1]) {
                        canTripb++
                        res.push(i)
                    }
                }
                if (canTripb == 3) return res
                return []
            }
            else if (arrInput.length == 4 && arrInput[0][1] == arrInput[1][1]) {//Tứ
                let valTemp = arrInput[0][1]
                let canQua = 0
                for (let i = cartIndex1 - 3; i < cartIndex1 + 4 || i < 13; i++) {
                    if (playerCarts[i] == valTemp) {
                        canQua++
                        res.push(i)
                    }
                }
                if (canQua == 4) return res
                return false
            }
            else if (arrInput.length > 2 && arrInput[0][1] == arrInput[1][1]) {//Thông
                return 'Thong'
            }
            else {//Sảnh

                res.push(cartIndex1)
                let temp = arrCart.indexOf(cartIndex1[1])
                let cartTemp = arrCart[temp + 1]
                let canSanh = true
                for (let i = cartIndex1 + 1; i < 13; i++) {
                    if (playerCarts[i][1] == cartTemp) {
                        canSanh = true
                        res.push(i)

                        temp = arrCart.indexOf(playerCarts[i][1])
                        cartTemp = arrCart[temp + 1]
                    }
                    if (res.length == arrInput.length) {
                        if (isGreater1(res[res.length - 1], arrInput[arrInput.length - 1]))
                            return res
                        return
                    }
                }
                return false
            }
        }
    }
    getValueCart() { }


    //console.log(dealCarts(shuffleArray(CARDS)))
    //console.log(quickTake(['03♥', '03♦'], ['03♥', '04♦', '05♠', '06♥', '07♣', '08♥', '09♣', '10♥', 'JJ♥', 'QQ♦', 'KK♣', 'Át♦', '02♥'], '', ''))

    // let res = quickTake(['03♠', '03♦', '03 '], ['03♥', '05♦', '05♠', '05♥', '06♠', '07♠', '07♠', '09♠', '10♠', 'JJ♠', 'KK♠', 'At♠', 'At♣'], 1, 0)
    // console.log(res)
}
module.exports = CardsService