export const Card = (
    { children, additional_classnames }: { children: React.ReactNode, additional_classnames?: string }
) => {
    return (
        <div className={`p-8 mb-8 bg-white rounded-2xl shadow-lg ${additional_classnames || ''}`}>
            {children}
        </div>
    )
}