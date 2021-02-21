import { useState, LegacyRef } from "react";
import { timeIconElements, timeIconBg } from '../../public/static/icons';

interface P {
    register: (instance: HTMLInputElement, options: object) => LegacyRef<HTMLInputElement> | void;
}

const TimePeriodRadioGoup: React.FC<P> = ({ register }) => {
    const [clicked, setClicked] = useState<number | null>(null);

    return (
        <div className="my-4 flex justify-around">
            <div>
                <input
                    type="radio"
                    name="timePeriod"
                    id="time-period-0"
                    value="0"
                    ref={(e) =>
                        register(e, {
                            required: true,
                        })
                    }
                    className="w-0 h-0"
                    onClick={ () => { setClicked(0) } }
                ></input>
                <label htmlFor="time-period-0" className={`transition duration-400 p-2 rounded-full shadow-double-sm cursor-pointer bg-${timeIconBg[0]} border-2 hover:shadow-inner ${clicked === 0 ? 'p-1 border-green-600' : '' }` }>{ timeIconElements[0] }</label>
            </div>
            <div>
                <input
                    type="radio"
                    name="timePeriod"
                    id="time-period-1"
                    value="1"
                    ref={(e) =>
                        register(e, {
                            required: true,
                        })
                    }
                    className="w-0 h-0"
                    onClick={ () => { setClicked(1) } }
                ></input>
                <label htmlFor="time-period-1" className={`transition duration-400 p-2 rounded-full shadow-double-sm cursor-pointer bg-${timeIconBg[1]} border-2 hover:shadow-inner ${clicked === 1 ? 'p-1 border-green-600' : '' }` }>{ timeIconElements[1] }</label>
            </div>
            <div>
                <input
                    type="radio"
                    name="timePeriod"
                    id="time-period-2"
                    value="2"
                    ref={(e) =>
                        register(e, {
                            required: true,
                        })
                    }
                    className="w-0 h-0"
                    onClick={ () => { setClicked(2) } }
                ></input>
                <label htmlFor="time-period-2" className={`transition duration-400 p-2 rounded-full shadow-double-sm cursor-pointer bg-${timeIconBg[2]} border-2 hover:shadow-inner ${clicked === 2 ? 'p-1 border-green-600' : '' }` }>{ timeIconElements[2] }</label>
            </div>
            <div>
                <input
                    type="radio"
                    name="timePeriod"
                    id="time-period-3"
                    value="3"
                    ref={(e) =>
                        register(e, {
                            required: true,
                        })
                    }
                    className="w-0 h-0"
                    onClick={ () => { setClicked(3) } }
                ></input>
                <label htmlFor="time-period-3" className={`transition duration-400 p-2 rounded-full shadow-double-sm cursor-pointer bg-${timeIconBg[3]} border-2 hover:shadow-inner ${clicked === 3 ? 'p-1 border-green-600' : '' }` }>{ timeIconElements[3] }</label>
            </div>
        </div>
    );
};

export default TimePeriodRadioGoup;