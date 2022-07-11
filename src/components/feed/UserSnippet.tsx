import Link from 'next/link'
import { ReactNode } from 'react'
import { graphql, useFragment } from 'react-relay'
import { UserSnippet_user$key } from '../../queries/__generated__/UserSnippet_user.graphql'

type UserSnippetProps = {
  user: UserSnippet_user$key
  showAvatar?: boolean
  showBio?: boolean
  children?: ReactNode
}

const UserSnippet = ({
  user,
  showAvatar = true,
  showBio = true,
  children,
}: UserSnippetProps) => {
  const data = useFragment(
    graphql`
      fragment UserSnippet_user on User {
        avatar
        id
        handle
        bio
        reputation {
          value
        }
      }
    `,
    user
  )

  return (
    <div className="flex flex-col">
      <div className="flex min-h-32">
        {showAvatar && (
          <img
            src={data.avatar}
            alt={`${data.handle}'s avatar`}
            className="w-16 h-16 rounded-full -mt-8 border-4 dark:border-dark-700"
          />
        )}
        <div className="flex flex-row mt-2">
          <Link href={`/@${data.handle}`}>
            <a className=" font-bold">{`@${data.handle}`}</a>
          </Link>
          {children}
          <span className="bg-sky-400/20 text-sky-600 px-2 ml-2 mb-2 rounded-md text-sm font-bold leading-6">
            {data.reputation.value}
          </span>
        </div>
      </div>
      {showBio && <span className=" text-sm">{data.bio}</span>}
    </div>
  )
}

export default UserSnippet
