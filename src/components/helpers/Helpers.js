const tern = (condition, com1, com2) => {
    if (condition)
        return com1;
    if (com2 == null)
        return <span></span>;
    return com2;
}

export { tern };