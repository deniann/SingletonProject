const ProcessManager = (() => {
    let instance;

    function Singleton (){
        if (instance) {
            return instance
        }

        instance = this 

        this.process = []

        this.createProcess = (process) => {
            this.process = [...this.process, process]
        }

        this.removeProcess = ({name: processName}) => {
            this.process = this.process.filter(({name}) => name)
        }

        this.getProcess = () => this.process
    }

        

    return {
        getInstance: () => instance || new Singleton (),
    }
})()

const pManager = ProcessManager.getInstance();
const pManager2 = ProcessManager.getInstance();

pManager.createProcess ({type: "process1", name: "teste"})
pManager.createProcess ({type: "process2", name: "outro teste"})

console.log(pManager2.getProcess())