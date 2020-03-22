//what is it?
//hash tables are used to store key-value pairs
//they are like arrays but the kyes are not ordered.
//unlike array, hask tables are fast for al of forllowing operations
//
//why should i card? because of their speed, hash tables are very commonly used
//JS has objects and Maps, Python has Dictorinaries, Java, Go, and Scala have Maps, Ruby has Hashes
//*objects have some restrictions but are basically hash tables
//how can we get human and computer readability? computers dont know how to index
//thats why we use hash tables
//in order to look up values by key, we need a way to convert keys into valid array indices
//a function that performs this task is called a hash function
//a hash function takes data of n size and spits out data of fixed size
//what makes a good one? fast (constanst time)
//doenst cluster outputs at specific indices, but distributes uniformly
//deterministic(same input yields same output)


//first has function (only with strings)
hash("pink", 9) 