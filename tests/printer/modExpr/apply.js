module X = F(A)
module X = F(Arg1, Arg2, Arg3)

module X = F(A : SetLike)
module X = F(A : SetLike, B: TreeLike)
module X = F(A : SetLike, B: TreeLike, C: BtreeLike, D: RedBlackTreeLike, E: AvlTreeLike)

module X = F()
module X = F()()
module X = F((), ())

module S0 = Make({
  type t = int
  let eq = (x, y) => x == y
})

module S1 = Make({
  type t = int
  let eq = (x, y) => x * x == y * y
})


let someFunctorAsFunction = (x: module(MT)): module(ResT) => module(SomeFunctor(unpack(x)))
