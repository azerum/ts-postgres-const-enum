import { TransactionStatus, connect } from 'ts-postgres'
import { expect, test } from 'vitest'

test('Initially, transactionStatus is Idle', async () => {
    const client = await connect({
        database: 'postgres'
    })

    expect(client.transactionStatus).toBe(TransactionStatus.Idle)
})
