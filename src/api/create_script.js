
import BX24Wrapper from './../libs/bx24-wrapper';

async function createScript () {
    let bx24 = new BX24Wrapper();

    let test = await bx24.callMethod('entity.get');

    return test;
}

export default createScript;
