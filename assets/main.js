// creation du perceptron
var perceptron = new synaptic.Architect.Perceptron(784,5,10);

// Creation d'un nouveau trainer
var trainer = new synaptic.Trainer(perceptron);

var set = mnist.set(500, 200);
var trainingSet = set.training;
var testSet = set.test;

trainer.train(trainingSet,{
	rate: .1,
  iterations: 100,
  error: .2,
  shuffle: true,
  log: 10,
  cost: synaptic.Trainer.cost.CROSS_ENTROPY
});

var result = perceptron.activate(testSet[0].input);
console.log(result);

for (var i = result.length - 1; i >= 0; i--) {
  result[i] = Math.round(result[i]);
}
console.log(testSet[0].output);