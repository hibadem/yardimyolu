import React from 'react';
import "./index.scss";

const Form = () => {
    return (
        <form className="form-section">
            <div className="form-group">
                <label>Adınız - Soyadınız:</label>
                <input type="name" className="form-control"/>
            </div>
            <div className="form-group">
                <label>Kurum Adı:</label>
                <input type="company" className="form-control" />
            </div>
            <div className="form-group">
                <label>Bağış Miktarı:</label>
                <input type="amount" className="form-control" />
            </div>
            <div class="form-group d-flex flex-column">
                <label for="exampleFormControlFile1">DEKONT</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
            </div>
            <button type="submit" className="btn btn-success green text-white">Submit</button>
        </form>
    )
}

export default Form;