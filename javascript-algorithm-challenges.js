// function analyzeRange(start, end, excludedNumbers) {

//     if (!Number.isInteger(start) || !Number.isInteger(end) || start > end) {
//         return "Invalid range!";
//     }

//     let numbers = [];
//     let evenCount = 0;
//     let oddCount = 0;
//     let sum = 0;

//     for (let i = start; i <= end; i++) {

//         if (excludedNumbers.includes(i)) {
//             continue;
//         }

//         numbers.push(i);
//         sum += i;

//         if (i % 2 == 0) {
//             evenCount++;
//         }
//         else {
//             oddCount++;
//         }
//     }

//     return {
//         numbers: numbers,
//         evenCount: evenCount,
//         oddCount: oddCount,
//         sum: sum
//     };
// }

// module.exports = { analyzeRange };


// function planRestock(products, minimumStock) {

//     if (!Number.isInteger(minimumStock) || minimumStock < 0) {
//         return "Invalid minimum!";
//     }

//     let lowStock = products.filter(product => product.stock < minimumStock);

//     let restock = lowStock.map(product => {

//         let { id, name, stock, price } = product;

//         let quantity = minimumStock - stock;
//         let cost = quantity * price;

//         return {
//             id: id,
//             name: name,
//             quantity: quantity,
//             cost: cost
//         };

//     });

//     let totalCost = restock.reduce((sum, product) => {
//         return sum + product.cost;
//     }, 0);

//     let updatedProducts = products.map(product => {

//         if (product.stock < minimumStock) {
//             return {
//                 ...product,
//                 stock: minimumStock
//             };
//         }

//         return { ...product };

//     });

//     return {
//         restock: restock,
//         totalCost: totalCost,
//         updatedProducts: updatedProducts
//     };
// }

// module.exports = { planRestock };



// function processBorrowing(books, requests, maxBooks) {

//     let approved = [];
//     let rejected = [];
//     let counts = {};

//     let remainingBooks = books.map(book => {
//         return { ...book };
//     });

//     for (let request of requests) {

//         let { user, bookId } = request;

//         let book = remainingBooks.find(book => book.id === bookId);

//         if (!book) {
//             rejected.push({
//                 user: user,
//                 bookId: bookId,
//                 reason: "Book not found"
//             });
//             continue;
//         }

//         if (book.availableCopies <= 0) {
//             rejected.push({
//                 user: user,
//                 bookId: bookId,
//                 reason: "Out of stock"
//             });
//             continue;
//         }

//         if (!counts[user]) {
//             counts[user] = 0;
//         }

//         if (counts[user] >= maxBooks) {
//             rejected.push({
//                 user: user,
//                 bookId: bookId,
//                 reason: "User limit reached"
//             });
//             continue;
//         }

//         approved.push({
//             user: user,
//             bookId: bookId,
//             title: book.title
//         });

//         book.availableCopies--;
//         counts[user]++;
//     }

//     return {
//         approved: approved,
//         rejected: rejected,
//         remainingBooks: remainingBooks
//     };
// }

// module.exports = { processBorrowing };



// function analyzeDeliveryRoute(stops, fuelCostPerKm, freeDeliveryThreshold) {

//     let resultStops = [];
//     let priorityStops = [];

//     let totalDistance = 0;
//     let totalRevenue = 0;

//     for (let i = 0; i < stops.length; i++) {

//         let stop = stops[i];

//         let stopTotal = stop.orders.reduce((sum, order) => {
//             return sum + order.amount;
//         }, 0);

//         let priority = false;

//         if (stopTotal >= freeDeliveryThreshold) {
//             priority = true;
//             priorityStops.push(stop.address);
//         }

//         resultStops.push({
//             address: stop.address,
//             stopTotal: stopTotal,
//             priority: priority
//         });

//         totalDistance += stop.distanceKm;
//         totalRevenue += stopTotal;
//     }

//     let fuelCost = totalDistance * fuelCostPerKm;

//     let profit = totalRevenue - fuelCost;

//     return {
//         stops: resultStops,
//         totalDistance: totalDistance,
//         totalRevenue: totalRevenue,
//         fuelCost: fuelCost,
//         profit: profit,
//         priorityStops: priorityStops
//     };
// }

// module.exports = { analyzeDeliveryRoute };


// function buildLeaderboard(players, ...rounds) {

//     let scores = {};

//     for (let player of players) {
//         scores[player.id] = 0;
//     }

//     for (let round of rounds) {

//         for (let result of round) {

//             if (scores[result.playerId] !== undefined) {
//                 scores[result.playerId] += result.points;
//             }

//         }
//     }

//     let leaderboard = [];

//     for (let player of players) {

//         leaderboard.push({
//             id: player.id,
//             name: player.name,
//             totalPoints: scores[player.id]
//         });

//     }

//     leaderboard.sort((a, b) => {

//         if (b.totalPoints !== a.totalPoints) {
//             return b.totalPoints - a.totalPoints;
//         }

//         return a.name.localeCompare(b.name);
//     });

//     let result = [];

//     for (let i = 0; i < leaderboard.length; i++) {

//         result.push({
//             rank: i + 1,
//             ...leaderboard[i]
//         });

//     }

//     let winner = null;

//     if (result.length > 0) {
//         winner = result[0].name;
//     }

//     let totalPoints = result.reduce((sum, player) => {
//         return sum + player.totalPoints;
//     }, 0);

//     let averagePoints = 0;

//     if (players.length > 0) {
//         averagePoints = totalPoints / players.length;
//     }

//     return {
//         leaderboard: result,
//         winner: winner,
//         averagePoints: averagePoints
//     };
// }

// module.exports = { buildLeaderboard };