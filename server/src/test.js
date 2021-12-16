

class Kevin {
  name = 'kevin';

  getName = () => {
    console.log(this.name);
  };
}

const j = {
  name: 'joe',
  getName: () => {
    console.log(this.name);
  }
};

const k = new Kevin();
k.getName();
j.getName();