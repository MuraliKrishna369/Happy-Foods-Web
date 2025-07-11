const Contact = () => {
    return (
        <div className="flex justify-center my-6">
        
            <form className="w-4/12 text-center border border-gray-300 p-2">
                <h1 className="m-2">Contact Us</h1>
                <input className="p-2 m-2 border border-e-black w-[90%]" type="text" placeholder="name"/>
                <input className="p-2 m-2 border border-e-black w-[90%]" type="text" placeholder="message"/>
                <button className="p-2 m-2 text-sm cursor-pointer border-0 rounded-lg bg-green-300">Submit</button>
            </form>
        </div>
    )
}

export default Contact