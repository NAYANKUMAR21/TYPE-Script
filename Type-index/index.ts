interface displayDaya {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function get(): Promise<void> {}

class DOM {
  async get(): Promise<void> {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
      const res = await data.json();
      this.display(res);
    } catch (er) {
      console.log(er.message);
    }
  }
  private display(data: displayDaya[]): void {
    const contaniner = document.querySelector('#container');
    data?.forEach((item: displayDaya): void => {
      const div = document.createElement('div');

      const p = document.createElement('p');
      p.innerText = item.body;

      const pId = document.createElement('p');
      pId.innerText = item.id.toString();

      div.append(pId, p);
      contaniner?.appendChild(div);
    });
  }
}

const x = new DOM().get();
