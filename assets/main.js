// creation du perceptron
var perceptron = new synaptic.Architect.Perceptron(2,3,1);

// Creation d'un nouveau trainer
var trainer = new synaptic.Trainer(perceptron);

var trainingSet = [
  {
    input: [0,0],
    output: [1]
  },
  {
    input: [0,1],
    output: [0]
  },
  {
    input: [1,0],
    output: [0]
  },
  {
    input: [1,1],
    output: [1]
  },
]

trainer.train(trainingSet,{
	rate: .1,
    iterations: 20000,
    error: .005,
    shuffle: true,
    log: 1000,
    cost: synaptic.Trainer.cost.CROSS_ENTROPY
});

var result = perceptron.activate([1,0])[0];
console.log(result);