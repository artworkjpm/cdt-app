import "./datatable.scss";

interface Props {
	tableHeaders: string[];
	data: any[];
}

export default function DataTable({ tableHeaders, data }: Props) {
	return (
		<div>
			<table>
				<thead>
					<tr>
						{tableHeaders.map((item, index) => {
							return <th key={index}>{item.replace("_", " ")}</th>;
						})}
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => {
						return (
							<tr key={index}>
								{tableHeaders.map((el, i) => {
									return <td key={i}>{item[el.toLowerCase()]}</td>;
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
