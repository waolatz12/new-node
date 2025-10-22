class House {
    constructor (paint, structure){
        this.structure = structure;
        this.paint = paint;
    }

    greet() {
        console.log(`Our new ${this.structure} house is painted ${this.paint}`);
    }
}

// const newHouse = new House ('White', '4-bedroom apartment');
// newHouse.greet();

class Agent extends House {
    constructor (paint, structure, agent, customer){
        super(paint, structure);
        this.agent = agent;
        this.customer = customer;
    }

    code(){
        console.log(`${this.agent} leased a ${this.structure} to ${this.customer}`);
    }
}

const itemLeased = new Agent ('White', '3-bedroom apartment', 'J&J Global', 'Mr. Adetona Babatunde');
// itemLeased.greet();
itemLeased.code();