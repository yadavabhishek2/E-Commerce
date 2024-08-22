import Left from "./Left";

function Admin() {
    return ( 
        <>
            <div className="w-11/12  flex-col justify-center mx-auto mt-4">
                <Left/>
                <div className="w-full mt-4" >
                <h1 className="text-3xl font-bold mb-5 text-blue-700 text-center">Welcome Admin...👤</h1>
                </div>
            </div>
        </>
     );
}

export default Admin;