# Infrastructure

Ansible configuration for the VPS (`vps1` in `~/.ssh/config`). Ansible runs
from your machine, connects over SSH, and makes the server match what these
files describe. Running it again changes nothing unless the server drifted.

## Setup (once)

```sh
brew install pipx
pipx install --python /usr/bin/python3.12 ansible-core   # 2.21 doesn't support Python 3.15 yet
pipx inject ansible-core ansible-lint --include-apps
cd infra && ansible-galaxy collection install -r requirements.yml
```

## Usage

```sh
just infra-bootstrap   # once per new server: installs python3-apt
just infra-check   # dry run: shows what would change, changes nothing
just infra-apply   # apply
```

Both ask for your sudo password on the VPS (`--ask-become-pass`).
Run `ansible-lint` in this folder after editing.

## How it fits together

| File | Purpose |
|---|---|
| `ansible.cfg` | Settings for commands run from this folder |
| `inventory.yml` | Which machines exist (`vps1`, in group `servers`) |
| `site.yml` | The playbook: which roles run on which hosts |
| `group_vars/all/vars.yml` | Variables for every host (e.g. `admin_user`) |
| `requirements.yml` | Collections the roles need beyond `ansible.builtin` |
| `roles/<role>/tasks/` | What the role does, as a list of desired states |
| `roles/<role>/defaults/` | The role's variables, overridable from `group_vars` |
| `roles/<role>/handlers/` | Actions that run only when a task changed something (e.g. reload sshd) |
| `roles/<role>/templates/`, `files/` | Config files copied to the server (templates are Jinja2) |

## Roles

- **base**: packages, admin user + SSH key, SSH hardening (no passwords, no
  root), ufw (22/80/443), swap, fail2ban, automatic security updates. It
  encodes the manual setup from the VPS notes plus the fixes listed in
  `BACKEND_PLAN.md`.
- Planned: **caddy**, **backend**, **backup**.
