import serviceAdd from '../services/query.js'

export default {
  async getData() {
    let datas = [];

    await fetch('/requests/getAll', {method: 'post'}, {})
      .then(res => res.json())
      .then(res => { datas = res; });


    // var p = new Promise((resolve, reject) => {
    //   fetch('/requests/getAll', {method: 'post'}, {})
    //     .then(res => res.json())
    //     .then(resolve);
    // });

    // await p.then((res) => {
    //   datas = res;
    // })

    return datas;
  }
}