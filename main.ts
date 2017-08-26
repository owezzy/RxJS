import {Observable,Observer} from "rxjs";

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let source = Observable.create(observer => {

    let index = 0;
    let produceValue = () => {
        observer.next(numbers[index++]);

        if (index < numbers.length) {
            setTimeout(produceValue, 2000)
        }
        else {
            observer.complete()
        }
    }
    produceValue();
}).map(n => n * 2);


class MyObserver implements Observer<number> {
    next(value) {
        console.log(`value: ${value}`);
    }

    error(e) {
        console.log(`error: ${e}`);
    }

    complete() {
        console.log("complete");
    }
}

source.subscribe(new MyObserver());