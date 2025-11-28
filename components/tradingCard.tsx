export type TradingCardSection = {
    heading?: string
    body: React.ReactNode
}

export type TradingCardProps = {
    title: string
    label: string
    image?: React.ReactNode
    sections: TradingCardSection[]
    footer?: React.ReactNode
}

export function TradingCard({ title, label, image, sections, footer }: TradingCardProps) {
    return (
        <div className="flex flex-col items-center">

        </div>
    )
}