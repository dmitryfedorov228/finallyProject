


export const getProductMorelist = (args) => {
    const {
        t,
        handleDelete
    } = args
    return[
        {
            title: t('Изменить'),
            onclick: () => {}
        },
        {
            title: t('Удалить'),
            onClick: handleDelete
        },
        {
            title: t('Заблокировать'),
            onclick: () => {}
        }
    ]
}