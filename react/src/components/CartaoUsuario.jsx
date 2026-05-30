function CartaoUsuario({nome, email, avatar}) {
    return (
        <div className="cartao">
            <img src={avatar} alt="nome" />
            <h3>{nome}</h3>
            <p>{email}</p>
        </div>
    )
}

export default CartaoUsuario