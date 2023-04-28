import { useState } from "react";
import "./app.css";

const App = () => {

    const [checked, setchecked] = useState<'checked' | ''>('');

    const teste = () => {
        const ipt = document.querySelector('#ipt') as any;
        const body = document.querySelector('body') as any;
        if (ipt?.checked) {
            setchecked('checked');
            body.classList.add('dark');
        } else {
            setchecked('');
            body.classList.remove('dark');
        }
    };

    return (
        <div id="container">
            <label
                className={checked}
                htmlFor="ipt"
                onClick={() => teste()}
            >
                <input type="checkbox" name="" id="ipt" />
                <span id="cloud1"></span>
                <span id="cloud2"></span>

                <span id="cloudbg1" className="cloud-bg"></span>
                <span id="cloudbg2" className="cloud-bg"></span>

                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>

            </label>
        </div>
    );
};

export default App;