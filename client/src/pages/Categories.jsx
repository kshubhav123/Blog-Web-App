import { Link } from 'react-router-dom';

const categories = [
    { id: 1, name: 'Technology', description: 'Latest trends and tech insights' },
    { id: 2, name: 'Health', description: 'Wellness, fitness, and health tips' },
    { id: 3, name: 'Lifestyle', description: 'Daily life, hobbies, and inspirations' },
    { id: 4, name: 'Travel', description: 'Travel stories and destination guides' },
    { id: 5, name: 'Finance', description: 'Money management and investment tips' },
    { id: 6, name: 'Education', description: 'Learning resources and study tips' },
];

const Categories = () => {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-center text-primary">Blog Categories</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map(({ id, name, description }) => (
                    <Link
                        key={id}
                        to={`/category/${name.toLowerCase()}`}
                        className="block p-6 border border-gray-200 rounded-lg shadow hover:shadow-lg transition bg-white"
                    >
                        <h2 className="text-xl font-semibold mb-2 text-primary">{name}</h2>
                        <p className="text-gray-600">{description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
