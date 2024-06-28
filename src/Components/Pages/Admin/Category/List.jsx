import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = ({ title }) => {
    const [items, setItems] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        fetch("http://localhost:4001/api/category")
            .then(response => response.json())
            .then(data => setItems(data.reverse()))
            .catch(error => console.log(error));
    }, [reload]);

    const handleDelete = (id) => {
        fetch(`http://localhost:4001/api/category/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                setReload(!reload);
                console.log(data);
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <Link to="/admin/category/add">Add</Link>
            <table border={1} align="center" cellSpacing={0} cellPadding={10}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Photo</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item._id}>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>
                                <img alt="" src={item.thumbnail} height="100" />
                            </td>
                            <td><button onClick={() => handleDelete(item._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;
