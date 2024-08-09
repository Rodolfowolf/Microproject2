document.getElementById("year").innerText = new Date().getFullYear();

//starting Vue application code

const app = Vue.createApp({
    data(){
        return{
            title: "RFQ - Request For Quotation List",
            mainDescription: "Our configurator simplifies the process of preparing a comprehensive Request For Quotation (RFQ) list. Select from a variety of server, workstation, and laptop models to generate a detailed and accurate quote tailored to your specific needs. This tool ensures you capture all essential details, making the procurement process more efficient and precise.",
            salesAvailable: true,
            inventoryserver: 5,
            inventoryworkstation: 10,
            inventorylaptop: 15,
            selectedserver: '',
            servers:['PowerEdge T150', 'PowerEdge R250', 'PowerEdge T360'],
            server: ['Processor core: Intel® Pentium G6405T', 'RAM Memory GB size: 1x 8GB, 3200MHz', 'Hard drive Unity: 1x 2TB HD SATA', 'Warranty extension: 1 year warranty','CAD $ 2,500.00'],
            server0: 2,
            server1: 'image/server1.avif',
            server2: 'image/server2.avif',
            server3: 'image/server3.avif',
            serverPrice: 2500,
            totalServerPrice: 0,
            selectedworkstation: '',
            workstations:['XPS', 'OptiPlex', 'Inspiron'],
            workstation: ['Processor core: Intel® Core™ i7 14700', 'RAM Memory GB size: 32 GB: 1 x 32 GB, DDR5, 5600 MT/s; up to 64 GB', 'Hard drive Unity: 512 GB SSD', 'Warranty extension: 1 year warranty','CAD $ 2,000.00'],
            workstation0: 2,
            workstation1: 'image/workstation1.avif',
            workstation2: 'image/workstation2.avif',
            workstation3: 'image/workstation3.avif',
            workstationPrice: 2000,
            totalWorkstationPrice: 0,
            selectedlaptop: '',
            laptops:['XPS', 'Latitude', 'Inspiron'],
            laptop: ['Processor core: 13th Gen Intel® Core™ i7-13620H', 'RAM Memory GB size: 32 GB DDR5', 'Hard drive Unity: 1 TB SSD', 'Warranty extension: 1 year warranty','CAD $ 1,500.00'],
            laptop0: 2,
            laptop1: 'image/laptop1.avif',
            laptop2: 'image/laptop2.avif',
            laptop3: 'image/laptop3.avif',
            laptopPrice: 1500,
            totalLaptopPrice: 0,
            serverlist: 0,
            workstationlist: 0,
            laptoplist: 0,
            fullPrice:0

        }
    },// end data()
    methods: {
        addToserverlist() {
            // referring to THIS cart within our data:
            this.serverlist++;
            this.totalServerPrice = this.serverPrice * this.serverlist;
            this.fullPrice = this.totalServerPrice + this.totalWorkstationPrice + this.totalLaptopPrice;
        },
        removeFromserverlist() {
            if (this.serverlist >= 1) {
                this.serverlist -= 1
                this.totalServerPrice = this.serverPrice * this.serverlist;
                this.fullPrice = this.totalServerPrice + this.totalWorkstationPrice + this.totalLaptopPrice;
            }
        },
        addToworkstationlist() {
            // referring to THIS cart within our data:
            this.workstationlist++;
            this.totalWorkstationPrice = this.workstationPrice * this.workstationlist;
            this.fullPrice = this.totalServerPrice + this.totalWorkstationPrice + this.totalLaptopPrice;
        },
        removeFromworkstationlist() {
            if (this.workstationlist >= 1) {
                this.workstationlist -= 1
                this.totalWorkstationPrice = this.workstationPrice * this.workstationlist;
                this.fullPrice = this.totalServerPrice + this.totalWorkstationPrice + this.totalLaptopPrice;
            }
        },
        addTolaptoplist() {
            // referring to THIS cart within our data:
            this.laptoplist++;
            this.totalLaptopPrice = this.laptopPrice * this.laptoplist;
            this.fullPrice = this.totalServerPrice + this.totalWorkstationPrice + this.totalLaptopPrice;
        },
        removeFromlaptoplist() {
            if (this.laptoplist >= 1) {
                this.laptoplist -= 1
                this.totalLaptopPrice = this.laptopPrice * this.laptoplist;
                this.fullPrice = this.totalServerPrice + this.totalWorkstationPrice + this.totalLaptopPrice;
            }
        }
    },
    computed: {
        formatedTotalServerPrice() {
            return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(this.totalServerPrice);
        },
        formatedTotalWorkstationPrice() {
            return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(this.totalWorkstationPrice);
        },
        formatedTotalLaptopPrice() {
            return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(this.totalLaptopPrice);
        },
        formatedFullPrice() {
            return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(this.fullPrice);
        }
    },
});