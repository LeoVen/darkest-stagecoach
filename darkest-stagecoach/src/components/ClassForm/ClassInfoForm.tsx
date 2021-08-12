import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField
} from '@material-ui/core'
import { FormBind } from '.'

interface Props {
    nameBind: FormBind<string>
    religiousBind: FormBind<boolean>
    transformBind: FormBind<boolean>
}

export const ClassInfoForm = ({
    nameBind,
    religiousBind,
    transformBind
}: Props) => {
    return (
        <FormGroup row>
            <TextField
                label="Name"
                id="form-name"
                value={nameBind.value}
                onChange={e => nameBind.valueChanged(e.target.value)}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={religiousBind.value}
                        onChange={e =>
                            religiousBind.valueChanged(e.target.checked)
                        }
                    />
                }
                label="Religious"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={transformBind.value}
                        onChange={e =>
                            transformBind.valueChanged(e.target.checked)
                        }
                    />
                }
                label="Transform"
            />
        </FormGroup>
    )
}
