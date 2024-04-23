import { TransactionStatus, connect } from 'ts-postgres'

void main()

async function main() {
    const client = await connect({
        database: 'postgres'
    })

    console.log(client.transactionStatus === TransactionStatus.Idle)
}
