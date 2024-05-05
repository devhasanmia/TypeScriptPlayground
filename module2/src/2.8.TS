{


    const getData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        return data
    }

    type TodoData = {
        userId: number,
        id: number,
        title: string,
        completed: boolean
    }

    // Promise and Reject
    const createPromise = () => {
        return new Promise<TodoData>((resolve, reject) => {
            getData().then(data => {
                if (data) {
                    resolve(data);
                } else {
                    reject("Failed to Load Data");
                }
            }).catch(error => {
                reject(error);
            });
        });
    };

    const showData = async () => {
        try {
            const data = await createPromise();
            return data;
        } catch (error) {
            return error
        }
    }

    console.log(showData())


}