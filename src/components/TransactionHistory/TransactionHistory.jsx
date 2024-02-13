import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
    return (
<table className={css.container}>
  <thead>
    <tr>
      <th className={css.list}>Type</th>
      <th className={css.list}>Amount</th>
      <th className={css.list}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({ type, amount, currency, id}) => (
    <tr key={id}>
     <td className={css.item}>{ type }</td>
      <td className={css.item}>{ amount }</td>
      <td className={css.item}>{ currency }</td>
    </tr>))}
      </tbody>
</table>
    )
}