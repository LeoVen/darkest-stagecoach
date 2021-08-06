import { TextField } from '@material-ui/core'
import { FormBind } from '.'

interface Props {
    nameBind: FormBind<string>
}

export const ClassInfoForm = ({ nameBind }: Props) => {
    return (
        <div>
            <TextField
                label="Name"
                id="form-name"
                value={nameBind.value}
                onChange={e => nameBind.valueChanged(e.target.value)}
            />
        </div>
    )
}
