import './styles.css';

export default function ItemList({ title, description }) {
    return (
        <div className="item-list">
            <strong>{title}</strong>
            <p>{description == null ? 'Nenhuma descrição do projeto fornecida.' : description}</p>
            <hr />
        </div>
    );
}
